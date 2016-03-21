# Ember-mu-registration

This addon provides a mu-register, mu-unregister and mu-change-password component for the [mu-registration microservice](https://github.com/mu-semtech/registration-service). 

## Basic usage
Just include the `{{mu-register}}`, `{{mu-unregister}}` or `{{mu-change-password}}` component in your template.

## Advanced usage

### Overwriting the component templates
To overwrite the template of the components, create a custom `mu-register.hbs`, `mu-unregister.hbs` or `mu-change-password.hbs` file. Make sure you use the correct bindings and actions. You can have a look at the default templates in `addon/templates/components`.

For mu-register
  - call the `register` action
  - use `name`, `nickname`, `password` and `passwordConfirmation` as value bindings for the input fields

For mu-unregister
  - call the `unregister` action

For mu-change-password
  - call the `changePassword` action
  - use `oldPassword`, `newPassword` and `newPasswordConfirmation` as value bindings for the input fields

### Customizing the components
To customize the components, generate your own new components and include the mu-register (`ember-mu-registration/mixins/mu-register`), mu-unregister (`ember-mu-registration/mixins/mu-unregister`) and mu-change-password (`ember-mu-registration/mixins/mu-change-password`) mixins to handle the `register`, `unregister` and `changePassword` actions.
