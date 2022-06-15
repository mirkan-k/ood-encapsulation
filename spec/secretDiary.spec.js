// const DiaryEntry = require('../src/diaryEntry.js')
const SecretDiary = require('../src/secretDiary.js')

describe('SecretDiary', () => {
  let secretDiary
  beforeEach(() => {
    secretDiary = new SecretDiary()
    id = 1
  })

  it('should initially be locked', () => {
    // execute
    const result = secretDiary.locked
    // verify
    expect(result).toEqual(true)
  })

  it('can be unlocked', () => {
    // execute
    const unlock = secretDiary.unlock()
    const result = secretDiary.locked
    // verify
    expect(unlock).toEqual(true)
    expect(result).toEqual(false)
  })

  it('can be locked', () => {
    // set up
    secretDiary.unlock()
    // execute
    const lock = secretDiary.lock()
    const result = secretDiary.locked
    // verify
    expect(lock).toEqual(true)
    expect(result).toEqual(true)
  })

  it('should throw error when trying to add entry while Diary is locked', () => {
    // set up
    secretDiary.lock()
    // execute
    const result = secretDiary.addEntryToDiary('hi')
    // verify
    expect(result).toEqual('error')
  })
  
  it('should throw error when trying to get entries while Diary is locked', () => {
    // set up
    secretDiary.lock()
    // execute
    const result = secretDiary.getEntries()
    // verify
    expect(result).toEqual('error')
  })

  it('can add entry while Diary is unlocked', () => {
    // set up
    secretDiary.unlock()
    const date = '15/06/2022'
    const entry = 'blah blah blah'
    const expected = {date: date, entry: entry}
    // execute
    const addEntry = secretDiary.addEntryToDiary(date, entry)
    const result = secretDiary.getEntries()
    // verify
    expect(addEntry).toEqual(true)
    expect(result[0].date).toEqual(expected.date)
    expect(result[0].entry).toEqual(expected.entry)
  })

  it('can get all entries while Diary is unlocked', () => {
    // set up
    secretDiary.unlock()
    const addEntry1 = secretDiary.addEntryToDiary('15/06/2022', 'blah blah blah')
    const addEntry2 = secretDiary.addEntryToDiary('16/06/2022', 'blah?')
    const expected = [ 
        {date: '15/06/2022', entry: 'blah blah blah'}, 
        {date: '16/06/2022', entry: 'blah?'} 
    ]
    // execute
    const result = secretDiary.getEntries()
    // verify
    expect(addEntry1).toEqual(true)
    expect(addEntry2).toEqual(true)
    expect(result[0].date).toEqual(expected[0].date)
    expect(result[0].entry).toEqual(expected[0].entry)
    expect(result[1].date).toEqual(expected[1].date)
    expect(result[1].entry).toEqual(expected[1].entry)
  })
})
