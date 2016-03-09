/* global visit, andThen, currentPath */

import {
  describe,
  it,
  beforeEach,
  afterEach
} from 'mocha'
import { expect } from 'chai'
import startApp from '../helpers/start-app'
import Ember from 'ember'

describe('Acceptance: Application', function () {
  let application

  beforeEach(function () {
    application = startApp()
  })

  afterEach(function () {
    Ember.run(application, 'destroy')
  })

  it('can visit /', function () {
    visit('/')

    andThen(function () {
      expect(currentPath()).to.equal('demo.index')
    })
  })
  it('can visit /palette', function () {
    visit('/palette')

    andThen(function () {
      expect(currentPath()).to.equal('demo.palette')
    })
  })
  it('can visit /typography', function () {
    visit('/typography')

    andThen(function () {
      expect(currentPath()).to.equal('demo.typography')
    })
  })
})
