import { Injectable } from '@angular/core';

import { Feedback } from '../shared/feedback';

import { Observable } from 'rxjs/Observable';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { RestangularModule, Restangular } from 'ngx-restangular';

@Injectable()
export class FeedbackService {

  constructor(private restangular: Restangular,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  submitFeedback(fb: Feedback): Observable<Feedback> {
    let feedback = this.restangular.all('feedback').post(fb);
    return feedback;
  }
}
