const app = {
  elements: {
    addBtns: document.querySelectorAll('.add'),
    navPlan: document.querySelector('.plan')
  },
  init: function() {
    this.handleEvents()
    modal.init()
    todo.init()
  },
  handleEvents: function() {
    this.elements.addBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        console.log('test')
        let tooltip = btn.parentElement.querySelector('span')
        animations.added(this.elements.navPlan)
        if (btn.classList.contains('added')) {
          animations.pop(btn)
          btn.classList.remove('added')
          tooltip.innerHTML = ''
          tooltip.classList.add('hidden')
        } else {
          animations.pop(btn)
          btn.classList.add('added')
          tooltip.classList.remove('hidden')
          tooltip.innerHTML = 'Toegevoegd aan planning'
        }
      })
    })
  }
}
const modal = {
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
  init: function() {
    this.handleEvents()
    if (this.elements.navItems.length > 0) {
      this.updateNav(0, this.elements.navItems[0])
    }
  },
  handleEvents: function() {
    if (this.elements.wrap) {
      console.log('init', this.elements.navItems)
      this.elements.closeBtn.addEventListener('click', () => {
        modal.close()
      })
      this.elements.openBtn.addEventListener('click', () => {
        modal.open()
      })
      this.elements.subscribeBtns.forEach((btn, i) => {
        btn.addEventListener('click', () => {
          if (i === 0) {
            modal.changeState(1)
          } else {
            modal.changeState(0)
          }
        })
      })
      this.elements.navItems.forEach((item, i) => {
        item.addEventListener('click', () => {
          modal.updateNav(i, item)
        })
      })
    }
  },
  open: function() {
    this.elements.wrap.classList.remove('hidden')
  },
  close: function() {
    this.elements.wrap.classList.add('hidden')
  },
  changeState: function(index) {
    this.elements.inner.dataset.state = index
    if (index === 0) {
      this.elements.timeslotsTooltip.innerHTML =
        'Je hebt nog geen afspraak ingepland'
    } else {
      this.elements.timeslotsTooltip.innerHTML =
        'Je hebt een afspraak ingepland'
    }
  },
  updateNav: function(index, item) {
    let left = item.getBoundingClientRect().left
    let width = item.getBoundingClientRect().width
    let wrapperLeft = this.elements.inner.getBoundingClientRect().left
    this.elements.nav.dataset.active = index
    this.elements.nav.style.setProperty(
      '--timeslotNavLeft',
      `${left - wrapperLeft - 33}px`
    )
    this.elements.nav.style.setProperty('--timeslotNavWidth', `${width}px`)
    this.elements.slots.forEach(slot => {
      slot.classList.remove('active')
    })
    this.elements.slots[index].classList.add('active')
  }
}
const todo = {
  elements: {
    list: document.querySelector('.planning main ol'),
    input: document.querySelector('.planning form input'),
    submit: document.querySelector('.planning form button')
  },
  init: function() {
    this.count()
    if (this.elements.list) {
      this.handleEvents()
    }
  },
  count: function() {
    this.elements.deleteBtns = document.querySelectorAll(
      '.planning main ol img'
    )
    this.btnCount = this.elements.deleteBtns.length + 1
  },
  handleEvents: function() {
    this.elements.submit.addEventListener('click', e => {
      e.preventDefault()
      this.createItem(this.elements.input.value)
    })
    this.elements.deleteBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        todo.deleteItem(btn)
      })
    })
  },
  createItem: function(content) {
    this.count()
    let li = document.createElement('li')
    li.insertAdjacentHTML(
      'beforeend',
      `
        <input type="checkbox" id="todo${this.elements.deleteBtns.length + 1}">
        <label for="todo${this.elements.deleteBtns.length +
          1}">${content}</label>
      `
    )
    let del = document.createElement('img')
    del.src = 'images/icons/trash.png'
    del.addEventListener('click', () => {
      todo.deleteItem(del)
    })
    li.appendChild(del)
    this.elements.list.appendChild(li)
  },
  deleteItem: function(el) {
    this.count()
    this.elements.list.removeChild(el.parentElement)
  }
}
const animations = {
  pop: function(el) {
    el.classList.add('active')
    setTimeout(() => {
      el.classList.remove('active')
    }, 300)
  },
  added: function(el) {
    el.classList.remove('added')
    setTimeout(() => {
      el.classList.add('added')
    }, 1)
  }
}
app.init()
