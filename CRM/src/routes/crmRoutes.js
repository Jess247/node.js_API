import {addNewContact,
        getContacts, 
        getContactWithId,
        updateContact,
        deleteContact
    } from '../controllers/crmController'

const routes = (app) => {
    app.route('/contact')
        
        .get((req,res, next) => {
            // middleware can be any thing else as well
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, getContacts)
        
        // post endpoint
        .post(addNewContact);

    app.route('/contact/:contactID')
        // access contact with id
        .get(getContactWithId) 
        // update contact data
        .put(updateContact)
        // delete contact
        .delete(deleteContact);
}

export default routes;