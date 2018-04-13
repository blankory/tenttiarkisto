import {Course} from '../model/course.model';

export const COURSES: Course[] = [
  {code: '813316A', name: 'Business Process Modeling', exam: [
      {course: '813316A', date: '12.1.2018', type: 'Mid-term', file: 'example.pdf'},
      {course: '813316A', date: '12.3.2018', type: 'Mid-term', file: 'example2.pdf'},
      {course: '813316A', date: '22.4.2018', type: 'End exam', file: 'example3.pdf'}
    ]},
  {code: '815303A', name: 'Embedded Software Development Environments ', exam: null},
  {code: '812351A', name: 'Enterprise Systems', exam: null},
  {code: '812331A', name: 'Interaction Design ', exam: null},
  {code: '521150A', name: 'Internetin perusteet', exam: null},
  {code: '812349A', name: 'IT Infrastructure ', exam: null},
  {code: '812315A', name: 'Kesäkurssi Ohjelmiston rakentaminen', exam: null}
];
