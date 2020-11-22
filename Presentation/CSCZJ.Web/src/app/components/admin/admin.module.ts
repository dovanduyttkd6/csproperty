import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminCenterComponent } from './admin-center/admin-center.component';
import { LeftmenuComponent } from './common/leftmenu/leftmenu.component';
import { UiTableComponent } from './common/ui-table/ui-table.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { MapHomeComponent } from './map/map-home/map-home.component';
import { PropertyCenterComponent } from './properties/property-center/property-center.component';
import { PropertyCreateComponent } from './properties/property-create/property-create.component';
import { PropertyDetailComponent } from './properties/property-detail/property-detail.component';
import { PropertyExportComponent } from './properties/property-export/property-export.component';
import { PropertyListComponent } from './properties/property-list/property-list.component';
import { PropertyOffComponent } from './properties/property-off/property-off.component';
import { PropertyPatrollistComponent } from './properties/property-patrollist/property-patrollist.component';
import { PropertyRentComponent } from './properties/property-rent/property-rent.component';
import { PropertyRentlistComponent } from './properties/property-rentlist/property-rentlist.component';
import { OverviewComponent } from './statistics/overview/overview.component';
import { AccountListComponent } from './systemmanager/account-list/account-list.component';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTableModule } from 'ng-zorro-antd/table';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';

import { NzAnchorModule } from 'ng-zorro-antd/anchor';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';



@NgModule({
  declarations: [AdminCenterComponent, LeftmenuComponent, UiTableComponent, FooterComponent, HeaderComponent, MapHomeComponent, PropertyCenterComponent, PropertyCreateComponent, PropertyDetailComponent, PropertyExportComponent, PropertyListComponent, PropertyOffComponent, PropertyPatrollistComponent, PropertyRentComponent, PropertyRentlistComponent, OverviewComponent, AccountListComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NzGridModule,NzTableModule,NzAutocompleteModule,NzListModule,NzAnchorModule,NzStatisticModule,NzTabsModule,NzTagModule,NzDividerModule,NzSpinModule,NzSelectModule,
    NzDatePickerModule,NzRadioModule,NzInputNumberModule,NzInputModule,NzFormModule,NzStepsModule,NzUploadModule,NzNotificationModule,NzMessageModule,NzModalModule,
    NzSpaceModule,FormsModule,ReactiveFormsModule,NzCardModule,NzButtonModule,NzPaginationModule,NzBreadCrumbModule,NzAvatarModule,NzPageHeaderModule,
    NzIconModule,NzMenuModule,NzLayoutModule,
  ]
})
export class AdminModule { }