'use strict';

var app = {
  elements: {
    steps: document.querySelectorAll('fieldset'),
    nextButtons: document.querySelectorAll('button.next'),
    prevButtons: document.querySelectorAll('button.prev'),
    listItems: document.querySelectorAll('ol li'),
    addPerson: document.querySelector('.addPerson'),
    passengers: document.querySelector('.passengers'),
    lastPassenger: document.querySelector('.passenger:last-of-type'),
    plane: document.querySelector('.plane')
  },
  init: function init() {
    this.currentStep = 0;
    this.handleEvents();
  },
  handleEvents: function handleEvents() {
    var _this = this;

    this.elements.nextButtons.forEach(function (button) {
      button.addEventListener('click', function (e) {
        app.currentStep++;
        app.updateStep(app.currentStep);
        app.movePlane(app.elements.listItems[app.currentStep], 'forwards');
      });
    });
    this.elements.prevButtons.forEach(function (button) {
      button.addEventListener('click', function (e) {
        app.currentStep--;
        app.updateStep(app.currentStep);
        app.movePlane(app.elements.listItems[app.currentStep], 'backwards');
      });
    });
    this.elements.addPerson.addEventListener('click', function () {
      _this.addPassenger();
    });
  },
  updateStep: function updateStep(step) {
    document.body.dataset.active = step;
    this.elements.steps.forEach(function (step) {
      step.classList.remove('active');
    });
    this.elements.steps[step].classList.add('active');
    this.elements.listItems.forEach(function (item, i) {
      if (i === step) {
        item.classList.add('active');
      } else if (i < step) {
        item.classList.remove('active');
        item.classList.add('done');
      } else {
        item.classList.remove('active');
        item.classList.remove('done');
      }
    });
  },
  addPassenger: function addPassenger() {
    var _this2 = this;

    this.elements.lastPassenger.insertAdjacentHTML('afterend', '<div class="inputGroup passenger"><div class="inputWrap"><label for="form_departure">Voornaam</label><input type="text" id="form_departure_time"></div><div class="inputWrap"><label for="form_arrival">Achternaam</label><input type="text" id="form_arrival_time"></div><button type="button" class="remove"><img src="images/close.png" alt="delete passenger"></button></div>');
    this.elements.lastPassenger = document.querySelector('.passenger:last-of-type');
    this.elements.lastPassenger.querySelector('button').addEventListener('click', function () {
      _this2.removePassenger(_this2.elements.lastPassenger);
    });
  },
  removePassenger: function removePassenger(button) {
    this.elements.passengers.removeChild(button);
    this.elements.lastPassenger = document.querySelector('.passenger:last-of-type');
  },
  movePlane: function movePlane(activeEl, direction) {
    var _this3 = this;

    console.log(activeEl, activeEl.getBoundingClientRect().top);
    this.elements.plane.style.left = activeEl.getBoundingClientRect().left - 28 + 'px';
    this.elements.plane.style.top = activeEl.getBoundingClientRect().top + 'px';
    if (direction === 'forwards') {
      this.elements.plane.classList.add('flyForwards');
      setTimeout(function () {
        _this3.elements.plane.classList.remove('flyForwards');
      }, 1000);
    } else if (direction === 'backwards') {
      this.elements.plane.classList.add('flyBackwards');
      setTimeout(function () {
        _this3.elements.plane.classList.remove('flyBackwards');
      }, 1000);
    }
  }
};
app.init();