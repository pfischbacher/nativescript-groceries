"use strict";
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var http_1 = require("nativescript-angular/http");
var platform_1 = require("nativescript-angular/platform");
var router_1 = require("nativescript-angular/router");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            http_1.NativeScriptHttpModule,
            router_1.NativeScriptRouterModule,
            router_1.NativeScriptRouterModule.forRoot(app_routing_1.routes)
        ],
        declarations: [
            app_component_1.AppComponent
        ].concat(app_routing_1.navigatableComponents),
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF5QztBQUN6QyxvREFBcUU7QUFDckUsa0RBQW1FO0FBQ25FLDBEQUFtRTtBQUNuRSxzREFBdUU7QUFFdkUsaURBQStDO0FBQy9DLDZDQUE4RDtBQWlCOUQsSUFBYSxTQUFTO0lBQXRCO0lBQXdCLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFBekIsSUFBeUI7QUFBWixTQUFTO0lBZnJCLGVBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRTtZQUNMLDZCQUFrQjtZQUNsQiwrQkFBdUI7WUFDdkIsNkJBQXNCO1lBQ3RCLGlDQUF3QjtZQUN4QixpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsb0JBQU0sQ0FBQztTQUMzQztRQUNELFlBQVk7WUFDUiw0QkFBWTtpQkFDVCxtQ0FBcUIsQ0FDM0I7UUFDRCxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO0tBQzVCLENBQUM7R0FFVyxTQUFTLENBQUc7QUFBWiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyByb3V0ZXMsIG5hdmlnYXRhYmxlQ29tcG9uZW50cyB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcylcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIC4uLm5hdmlnYXRhYmxlQ29tcG9uZW50c1xuICAgIF0sXG4gICAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XVxufSlcblxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxuIl19