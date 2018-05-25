'use strict';

var app = {
  elements: {
    addBtns: document.querySelectorAll('.add')
  },
  init: function init() {
    this.handleEvents();
    modal.init();
    todo.init();
  },
  handleEvents: function handleEvents() {
    this.elements.addBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        console.log('test');
        var tooltip = btn.parentElement.querySelector('span');
        if (btn.classList.contains('added')) {
          animations.pop(btn);
          btn.classList.remove('added');
          tooltip.innerHTML = '';
          tooltip.classList.add('hidden');
        } else {
          animations.pop(btn);
          btn.classList.add('added');
          tooltip.classList.remove('hidden');
          tooltip.innerHTML = 'Toegevoegd aan planning';
        }
      });
    });
  }
};
var modal = {
  elements: {
    wrap: document.querySelector('.timeslots'),
    inner: document.querySelector('.timeslots .content'),
    closeBtn: document.querySelector('.timeslots .close'),
    openBtn: document.querySelector('.timeslotBtn'),
    subscribeBtns: document.querySelectorAll('.subscribeBtn'),
    nav: document.querySelector('.timeslots nav ul'),
    navItems: document.querySelectorAll('.timeslots nav ul li'),
    slots: document.querySelectorAll('.slots'),
    timeslotsTooltip: document.querySelector('.timeslotsTooltip')
  },
  init: function init() {
    this.handleEvents();
    if (this.elements.navItems.length > 0) {
      this.updateNav(0, this.elements.navItems[0]);
    }
  },
  handleEvents: function handleEvents() {
    if (this.elements.wrap) {
      console.log('init', this.elements.navItems);
      this.elements.closeBtn.addEventListener('click', function () {
        modal.close();
      });
      this.elements.openBtn.addEventListener('click', function () {
        modal.open();
      });
      this.elements.subscribeBtns.forEach(function (btn, i) {
        btn.addEventListener('click', function () {
          if (i === 0) {
            modal.changeState(1);
          } else {
            modal.changeState(0);
          }
        });
      });
      this.elements.navItems.forEach(function (item, i) {
        item.addEventListener('click', function () {
          modal.updateNav(i, item);
        });
      });
    }
  },
  open: function open() {
    this.elements.wrap.classList.remove('hidden');
  },
  close: function close() {
    this.elements.wrap.classList.add('hidden');
  },
  changeState: function changeState(index) {
    this.elements.inner.dataset.state = index;
    if (index === 0) {
      this.elements.timeslotsTooltip.innerHTML = 'Je hebt nog geen afspraak ingepland';
    } else {
      this.elements.timeslotsTooltip.innerHTML = 'Je hebt een afspraak ingepland';
    }
  },
  updateNav: function updateNav(index, item) {
    var left = item.getBoundingClientRect().left;
    var width = item.getBoundingClientRect().width;
    var wrapperLeft = this.elements.inner.getBoundingClientRect().left;
    this.elements.nav.dataset.active = index;
    this.elements.nav.style.setProperty('--timeslotNavLeft', left - wrapperLeft - 33 + 'px');
    this.elements.nav.style.setProperty('--timeslotNavWidth', width + 'px');
    this.elements.slots.forEach(function (slot) {
      slot.classList.remove('active');
    });
    this.elements.slots[index].classList.add('active');
  }
};
var todo = {
  elements: {
    list: document.querySelector('.planning main ol'),
    input: document.querySelector('.planning form input'),
    submit: document.querySelector('.planning form button')
  },
  init: function init() {
    this.count();
    if (this.elements.list) {
      this.handleEvents();
    }
  },
  count: function count() {
    this.elements.deleteBtns = document.querySelectorAll('.planning main ol img');
    this.btnCount = this.elements.deleteBtns.length + 1;
  },
  handleEvents: function handleEvents() {
    var _this = this;

    this.elements.submit.addEventListener('click', function (e) {
      e.preventDefault();
      _this.createItem(_this.elements.input.value);
    });
    this.elements.deleteBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        todo.deleteItem(btn);
      });
    });
  },
  createItem: function createItem(content) {
    this.count();
    var li = document.createElement('li');
    li.insertAdjacentHTML('beforeend', '\n        <input type="checkbox" id="todo' + (this.elements.deleteBtns.length + 1) + '">\n        <label for="todo' + (this.elements.deleteBtns.length + 1) + '">' + content + '</label>\n      ');
    var del = document.createElement('img');
    del.src = 'images/icons/trash.png';
    del.addEventListener('click', function () {
      todo.deleteItem(del);
    });
    li.appendChild(del);
    this.elements.list.appendChild(li);
  },
  deleteItem: function deleteItem(el) {
    this.count();
    this.elements.list.removeChild(el.parentElement);
  }
};
var animations = {
  pop: function pop(el) {
    el.classList.add('active');
    setTimeout(function () {
      el.classList.remove('active');
    }, 300);
  }
};
app.init();