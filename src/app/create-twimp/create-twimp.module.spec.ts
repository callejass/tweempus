import { CreateTwimpModule } from './create-twimp.module';

describe('CreateTwimpModule', () => {
  let createTwimpModule: CreateTwimpModule;

  beforeEach(() => {
    createTwimpModule = new CreateTwimpModule();
  });

  it('should create an instance', () => {
    expect(createTwimpModule).toBeTruthy();
  });
});
