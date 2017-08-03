import expect from 'expect';
import { Meteor } from 'meteor/meteor';

import { validateNewUser } from './users';

if(Meteor.isServer) {
  describe('users', function() {

    it('should allow valid email', function() {
      const testUser = {
        emails: [
          {
            address: "test@example.com"
          }
        ]
      };
      const res = validateNewUser(testUser);
      expect(res).toBe(true);
    });

    it('should reject invalid email', function() {
      const testUser = {
        emails: [
          {
            address: "tolu.kalejaiye"
          }
        ]
      };

      expect(() => {
        validateNewUser(testUser);
      }).toThrow();
    });

  });
}

















// const add = (a,b) => {
//   if(typeof b !== 'number') {
//     return a + a;
//   }
//   return a + b;
// };
//
// describe('add', function() {
//   it('should add two numbers', function() {
//     const res = add(8,4);
//
//     expect(res).toBe(12);
//
//   });
//
//   it('should double a single number', function() {
//     const res = add(5);
//
//     expect(res).toBe(10);
//   });
// });
