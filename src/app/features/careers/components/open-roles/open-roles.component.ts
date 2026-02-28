import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

interface OpenRole {
    title: string;
    department: string;
    location: string;
    link: string;
}

@Component({
    selector: 'app-open-roles',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './open-roles.component.html',
    styleUrl: './open-roles.component.scss'
})
export class OpenRolesComponent implements OnChanges {
    @Input() roles: OpenRole[] = [];

    filteredRoles: OpenRole[] = [];
    readonly departmentOptions: string[] = ['Engineering', 'Design', 'Sales'];
    readonly locationOptions: string[] = ['Remote', 'Zurich'];
    selectedDepartment: string = 'Role';
    selectedLocation: string = 'Location';
    isDepartmentOpen = false;
    isLocationOpen = false;

    ngOnChanges() {
        this.filterRoles();
    }

    filterRoles() {
        this.filteredRoles = this.roles.filter(role =>
            (this.selectedDepartment === 'Role' || role.department === this.selectedDepartment) &&
            (this.selectedLocation === 'Location' || role.location === this.selectedLocation)
        );
    }

    toggleDepartmentDropdown() {
        this.isDepartmentOpen = !this.isDepartmentOpen;
        this.isLocationOpen = false;
    }

    toggleLocationDropdown() {
        this.isLocationOpen = !this.isLocationOpen;
        this.isDepartmentOpen = false;
    }

    setDepartment(dept: string) {
        this.selectedDepartment = dept;
        this.isDepartmentOpen = false;
        this.filterRoles();
    }

    setLocation(loc: string) {
        this.selectedLocation = loc;
        this.isLocationOpen = false;
        this.filterRoles();
    }
}
