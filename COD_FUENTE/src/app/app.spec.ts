import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  it('muestra el título de la galería VivasSolar', async () => {
    await TestBed.configureTestingModule({ imports: [App] }).compileComponents();
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const pagina = fixture.nativeElement as HTMLElement;
    expect(pagina.querySelector('h1')?.textContent).toContain('Galería de trabajos VivasSolar');
  });
});
