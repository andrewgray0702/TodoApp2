import { TestBed } from '@angular/core/testing';

import { TodoServService } from './todo-serv.service';

describe('TodoServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoServService = TestBed.get(TodoServService);
    expect(service).toBeTruthy();
  });
});
