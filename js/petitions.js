window.components = window.components || {};
window.components.petitions = function (doc, win) {
  /**
   * Retrieves petition data from Action Network API, then submits signature
   * @param {object} doc - Document object
   * @param {object} win - Window object
   * */
  "use strict";

  var
    body = doc.getElementsByTagName('body')[0],
    petitionSignatureForm = doc.getElementById('petition-form'),
    apiHost = petitionSignatureForm.dataset.host,
    objectIdentifier = petitionSignatureForm.dataset.petitionId,
    submitButton = petitionSignatureForm.querySelector('[type="submit"]');


  function submitForm(event) {
    /**
     * Submits the form to ActionNetwork. If the script doesn’t, by now, know
     * the action_network identifier, default isn’t prevented on the event and
     * form submission proceeds as normal.
     * @param {event} event - Form submission event
     * */
    if (objectIdentifier) {
      event.preventDefault();
    }

    var
      signatureSubmission = new XMLHttpRequest();

    // win.callbacks.petitions.preSubmit();

    function compilePayload() {
      /**
       * Compiles the form data into a JSON payload for Ajax submission
       * @return {object} petitionFormData - just the info the API needs
       * */
      var tags = ['idl'];

      var formData = new FormData();
      formData.append('guard', '');
      formData.append('hp_enabled', true);
      formData.append('org', 'fftf');
      formData.append('an_tags', JSON.stringify(tags));
      formData.append('an_url', win.location.href);
      formData.append('contact_congress', 0);
      formData.append('an_petition', petitionSignatureForm.action.replace('/signatures', ''));
      formData.append('member[first_name]', doc.getElementById('form-first_name').value);
      formData.append('member[email]', doc.getElementById('form-email').value);
      formData.append('member[postcode]', doc.getElementById('form-zip_code').value);
      formData.append('member[country]', "US");

      if (doc.getElementById('form-comments') && doc.getElementById('form-comments').value) {
        formData.append('action_comment', doc.getElementById('form-comments').value);
      }

      formData.append('tag', "idl");
      

      return formData;
    }

    signatureSubmission.open('POST', 'https://queue.fightforthefuture.org/action', true);
    // signatureSubmission.open('POST', 'http://localhost:9001/action', true); // JL DEBUG ~
    signatureSubmission.addEventListener('error', function() {
      alert('An error occurred while signing up :(');
    });
    signatureSubmission.addEventListener('load', function() {
      window.location.href = '/thanks';
      // alert('yay');
    });
    signatureSubmission.send(compilePayload());
  }

  function addEventListeners() {
    /**
     * Attaches all the listeners all the places
     * */
    petitionSignatureForm.addEventListener('submit', submitForm);
  }

  function init() {
    addEventListeners();
  }

  init();
};
