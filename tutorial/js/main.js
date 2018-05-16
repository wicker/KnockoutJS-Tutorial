// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
function AppViewModel() {
    this.firstName = ko.observable("Bert");
    this.lastName = ko.observable("bertington");

    this.fullName = ko.computed(function() {
      return this.firstName() + " " + this.lastName();
    }, this);

    this.capitalizeLastName = function() {
      var currentVal = this.lastName();
      this.lastName(currentVal.toUpperCase());
    }
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());
