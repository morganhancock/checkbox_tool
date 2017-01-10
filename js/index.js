function myViewModel() {
    var self = this;
 
    self.checkboxText = ko.observable("");
    self.checkboxNumber = ko.observable("");
    self.checkboxName = ko.observable("");
    
  self.checkboxID = ko.computed(function() {
      return self.checkboxName() + self.checkboxNumber();
    });
}
ko.applyBindings(new myViewModel);

new Clipboard('.mdl-button');