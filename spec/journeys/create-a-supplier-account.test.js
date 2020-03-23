const hostname = 'http://localhost'

describe('create a supplier account journey', () => {
  describe('create a supplier account page', () => {
    test('we are on the create a supplier account page', async () => {
      await page.goto(hostname + '/suppliers/create/start')
    })

    test('it has a title and heading', async () => {
      await expect(page.title()).resolves.toContain('Create a supplier account')
      await expect(page).toMatchElement('h1', { text: 'Create a supplier account' })
    })

    test('it leads to the enter a duns number page', async () => {
      await expect(page).toClick('a', { text: 'Start' })

      await page.waitForNavigation()
      await expect(page.url()).toEqual(hostname + '/suppliers/create/duns-number')
    })
  })

  describe('enter your duns number page', () => {
    test('we are on the enter your duns number page', async () => {
      await expect(page.url()).toEqual(hostname + '/suppliers/create/duns-number')
    })

    test('it has a title and heading', async () => {
      await expect(page.title()).resolves.toContain('DUNS number')
      await expect(page).toMatchElement('h1', { text: 'Enter your DUNS number' })
    })

    test('it has a form that can be filled in', async () => {
      await expect(page).toFill('input[name="duns_number"]', '424242422')
    })

    test('it leads to the we found these details page', async () => {
      await expect(page).toClick('button', { text: 'Continue' })

      await page.waitForNavigation()
      // await expect(page.url()).toEqual(hostname + '/suppliers/create/confirm-company');
    })
  })

  describe.skip('we found these details page', () => {
    test('we are on the we found these details page', async () => {
      await expect(page.url()).toEqual(hostname + '/suppliers/create/confirm-company')
    })

    test('it has a title and heading', async () => {
      await expect(page.title()).resolves.toContain('Confirm company')
      await expect(page).toMatchElement('h1', { text: 'We found these details' })
    })

    test('it has a form that can be filled in', async () => {
      await expect(page).toClick('radio', { text: 'Yes' })
    })

    test('it leads to the your company details page', async () => {
      await expect(page).toClick('button', { text: 'Continue' })

      await page.waitForNavigation()
      await expect(page.url()).toEqual(hostname + '/suppliers/create/company-details')
    })
  })

  describe('your company details page', () => {
    test('we are on the your company details page', async () => {
      await expect(page.url()).toEqual(hostname + '/suppliers/create/company-details')
    })

    test('it has a title and heading', async () => {
      await expect(page.title()).resolves.toContain('Company details')
      await expect(page).toMatchElement('h1', { text: 'Your company details' })
    })

    test('it has a form that can be filled in', async () => {
      await expect(page).toFillForm('form', {
        company_name: 'Megadodo Publications',
        contact_name: 'Zarniwoop',
        email_address: 'zarniwoop@megadodo.example',
        phone_number: '42'
      })
    })

    test('it leads to the create login page', async () => {
      await expect(page).toClick('button', { text: 'Continue' })

      await page.waitForNavigation()
      await expect(page.url()).toEqual(hostname + '/suppliers/create/account')
    })
  })

  describe('create login page', () => {
    test('we are on the create login page', async () => {
      await expect(page.url()).toEqual(hostname + '/suppliers/create/account')
    })

    test('it has a title and heading', async () => {
      await expect(page.title()).resolves.toContain('Create login')
      await expect(page).toMatchElement('h1', { text: 'Create login' })
    })

    test('it has a form that can be filled in', async () => {
      await expect(page).toFill('input[name="email_address"]', 'zarniwoop@megadodo.example')
    })

    test('it leads to the check your information page', async () => {
      await expect(page).toClick('button', { text: 'Continue' })

      await page.waitForNavigation()
      await expect(page.url()).toEqual(hostname + '/suppliers/create/company-summary')
    })
  })

  describe('check your information page', () => {
    test('we are on the check your information page', async () => {
      await expect(page.url()).toEqual(hostname + '/suppliers/create/company-summary')
    })

    test('it has a title and heading', async () => {
      await expect(page.title()).resolves.toContain('Check your information')
      await expect(page).toMatchElement('h1', { text: 'Check your information' })
    })

    test.skip('it leads to the activate your account page', async () => {
      await expect(page).toClick('button', { text: 'Create account' })

      await page.waitForNavigation()
      await expect(page.url()).toEqual(hostname + '/suppliers/create/complete')
    })
  })
})
