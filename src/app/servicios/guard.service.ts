import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate{
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.autenticacionService.isAuthenticated();
  }

  constructor(private autenticacionService: AutenticacionService) { }
}
