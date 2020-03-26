import { NgModule } from '@angular/core';

import {
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatBadgeModule,
    MatButtonModule
} from '@angular/material';

@NgModule({
    imports: [
        MatInputModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatBadgeModule,
        MatButtonModule
    ],
    exports: [
        MatInputModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatBadgeModule,
        MatButtonModule
    ]
})

export class AngularMaterial { }