import { ComponentFixture, async } from '@angular/core/testing';
import { TestUtils }  from '../../../test';
import { LoginPage } from './login';

let fixture: ComponentFixture<LoginPage> = null;
let instance: any = null;

describe('Login: HelloIonic', () => {

  beforeEach(async(() => TestUtils.beforeEachCompiler([LoginPage]).then(compiled => {
    fixture = compiled.fixture;
    instance = compiled.instance;
  })));

  it('should create the Login page', async(() => {
    expect(instance).toBeTruthy();
  }));
});
