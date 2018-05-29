/***********to run test : npm run test:watch********/
import { renderComponent , expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

// Use 'describe' to group together similar tests
describe('Comment List Component' , () => {
    // create an instance of CommentBox
    let component;

    beforeEach(() => {
        const props =  { 
            comments : ['New Comment', 'Other Comment', 'Other New Comment']
        };

        component = renderComponent(CommentList, null, props );
    });

    // Use 'it' to test a single attribute of a target
    it('has the correct class', () => {
        expect(component).to.have.class('comment-list');    
        });

    it('show an LI for each comment', () => {
       expect(component.find('li').length).to.equal(3);
        });

    it('show each comment that is provided', () => {
        expect(component).to.contain('New Comment');
        expect(component).to.contain('Other New Comment'); 
        });
});
