import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalizedTextPipe } from '../../../../shared/pipes/localized-text.pipe';
import { LocaleService } from '../../../../core/services/locale.service';
import { getLocalizedValue } from '../../../../core/services/sanity.helpers';
import { LocalizedText } from '../../../../shared/models/sanity.models';

@Component({
    selector: 'app-open-roles',
    standalone: true,
    imports: [CommonModule, LocalizedTextPipe],
    templateUrl: './open-roles.component.html',
    styleUrl: './open-roles.component.scss'
})
export class OpenRolesComponent {
    @Input() roles: any[] = [];
    @Input() openRolesTitle: LocalizedText | undefined;
    @Input() departmentFilterLabel: LocalizedText | undefined;
    @Input() locationFilterLabel: LocalizedText | undefined;
    @Input() applyButtonLabel: LocalizedText | undefined;

    private localeService = inject(LocaleService);
    currentLocale = this.localeService.currentLocale;

    filteredRoles: any[] = [];
    selectedDepartment: string = 'Engineering';
    selectedLocation: string = 'Remote';

    ngOnInit() {
        this.filterRoles();
    }

    filterRoles() {
        this.filteredRoles = this.roles.filter(role => {
            const departmentValue = this.getLocalizedValue(role.department);
            const locationValue = this.getLocalizedValue(role.location);

            return (this.selectedDepartment === 'All' || departmentValue === this.selectedDepartment) &&
                (this.selectedLocation === 'All' || locationValue === this.selectedLocation);
        });
    }

    getLocalizedValue(value: LocalizedText | string | undefined): string {
        if (!value) return '';
        if (typeof value === 'string') return value;
        return getLocalizedValue(value as Record<string, string>, this.currentLocale(), 'de') || '';
    }

    setDepartment(dept: string) {
        this.selectedDepartment = dept;
        this.filterRoles();
    }

    setLocation(loc: string) {
        this.selectedLocation = loc;
        this.filterRoles();
    }
}

