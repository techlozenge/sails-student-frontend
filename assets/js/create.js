/**
 * Use the jQuery Validate plugin to add validation to the form
 *
 * Here's what this you will need to do:
 *
 * DONE 1. Include the following jQuery Validate JavaScript in layout.ejs
 *    <script type="text/javascript" src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.15.0/jquery.validate.min.js"></script>
 *
 * DONE 2. Use jQuery validate and add validation to the form with the following requirements
 *        First Name - required, at least 2 characters
 *        Last Name  - required, at least 2 characters
 *	      start_date - make sure date is yyyy-mm-dd
 *	      ADD any other validation that makes you happy
 *
 * DONE 3. Use a custom message for one validation
 *
 * DONE 4. Make the color of the error text red
 *
 *
 *
 * Here's the documentation you need:
 * https://jqueryvalidation.org/validate/
 * https://jqueryvalidation.org/documentation/#link-list-of-built-in-validation-methods
 *
 */

(function(){
  $(function(){

    $("#addStudentForm").validate({
      errorClass: "text-danger",

      rules: {
        first_name: {
          required: true,
          minlength: 2
        },
        last_name: {
          required: true,
          minlength: 2
        },
        start_date: {
          required: true,
          dateISO: true
        }
      },

      messages: {
        first_name: {
          required: "The first name is a required field",
          minlength: "The first name must be a minimum of two characters"
        },
        last_name: {
          required: "The last name is a required field",
          minlength: "The last name must be a minimum of two characters"
        },
        start_date: {
          required: "The start date is a required field",
          minlength: "The start date must be in YYYY-MM-DD format"
        }

      },

    });

  })
})();
