import { AuthServiceDummy } from './authService';
import { inject, TestBed, async } from '@angular/core/testing';
import { Respuesta } from './vo/respuesta';
import { HttpModule, XHRBackend } from '@angular/http';
import { Response, ResponseOptions } from '@angular/http/';
import { MockBackend, MockConnection } from '@angular/http/testing';

describe('authService service', () => {
  let user: string;
  let pass: string;
  let service: AuthServiceDummy;
  let mockBackend: MockBackend;
  beforeEach(async(() => {
    TestBed.configureTestingModule(
      {
        providers: [
          { provide: XHRBackend, useClass: MockBackend },
          AuthServiceDummy, 
          MockBackend, 
          ],
        imports: [HttpModule]
      });



  }));

  beforeEach(inject([AuthServiceDummy, MockBackend], (s: AuthServiceDummy, m: MockBackend) => {
    service = s;
    mockBackend = m;
    mockBackend.connections.subscribe((conn: MockConnection) => {
      conn.mockRespond(new Response(new ResponseOptions("{token:'caballeroDeJunini'}")))
    });
    TestBed.compileComponents();
  }));


  it('should...login', async(() => {
    user = "test";
    pass = "test";
    service.login(user, pass).subscribe((result) => {
      console.log(result);
      expect(result.result).toBe(Respuesta.RESULT.OK);
    });
  }));


});
