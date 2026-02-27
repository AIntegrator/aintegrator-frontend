import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-open-roles',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './open-roles.component.html',
    styleUrl: './open-roles.component.scss'
})
export class OpenRolesComponent {
    @Input() roles: any[] = [];

    filteredRoles: any[] = [];
    selectedDepartment: string = 'Engineering';
    selectedLocation: string = 'Remote';

    ngOnInit() {
        this.filterRoles();
    }

    filterRoles() {
        this.filteredRoles = this.roles.filter(role =>
            (this.selectedDepartment === 'All' || role.department === this.selectedDepartment) &&
            (this.selectedLocation === 'All' || role.location === this.selectedLocation)
        );
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
