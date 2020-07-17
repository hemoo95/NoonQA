/// <reference types="cypress" />

import { data } from "cypress/types/jquery"
import { Login } from '../Page/Login'
import { check } from '../Page/check'
import { fill } from "cypress/types/lodash"
import { clock } from "cypress/types/sinon"

const testData = require("../../fixtures/testData.json")




describe('Login Page  E2E Tests', () => {

  const y = new check()
  const x = new Login()
  var counter = 0;

  beforeEach(() => {
    x.navigate();
  })

  it("Blanck page ", () => {

    y.blank_click

  })

  it("Check forget ", () => {

    y.f_pw()

  })

  it("Join US ", () => {

    y.join_chick

  })


  testData.forEach((testDataRow: any) => {
    const data = {
      password: testDataRow.pw,
      username: testDataRow.un
    }




    context(`Generating a test for e-mail :${data.username}  and Password ${data.password}`, () => {
      it('VALID USER & INVALID PASSWORD', () => {


        x.fill_username(data.username)
        x.fill_password(data.password);
        x.click_login_button()
        if (data.username == "test.asal.cy@gmail.com" && data.password == "asal11111") {
          y.check_oppend()
        }

        else if (data.username == "test.asal.cy@gmail.com") {
          y.error_pw()
        }

        else {
          y.error_un()
        }

      })
    })

   

  })
})