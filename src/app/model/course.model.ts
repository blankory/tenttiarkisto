import {Exam} from './exam.model';

export class Course {
  code: string;
  name: string;
  exam: Exam[] | null;
}
