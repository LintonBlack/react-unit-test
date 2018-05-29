/***********to run test : npm run test:watch********/
import { renderComponent , expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

// Use 'describe' to group together similar tests
describe('Comment Box Component' , () => {
    // create an instance of CommentBox
    let component;

    beforeEach(() => {
        component = renderComponent(CommentBox);
    });

    // Use 'it' to test a single attribute of a target
    it('has the correct class', () => {
        expect(component).to.have.class('comment-box');    
        });

    it('has a text area', () => {
        expect(component.find('textarea')).to.exist;
    });

    it('has a button', () => {
        expect(component.find('button')).to.exist;    
        });
    
    // Use 'describe' to group together similar tests (nested)
    describe('Entering some text' , () => {

        // additional set up only for this describe
        beforeEach(() => {
            // simulate some changes
            component.find('textarea').simulate('change', 'new comment');
        });

        it('shows that text in the textarea', () => {
            expect(component.find('textarea')).to.have.value('new comment');    
            });

        it('when submitted, clear the input', () => {
            // need to trigger the submit
            //console.log(component);
            component.simulate('submit');
            expect(component.find('textarea')).to.have.value('');
                });
        })

});
