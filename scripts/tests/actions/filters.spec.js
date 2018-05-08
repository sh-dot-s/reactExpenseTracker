import { searchBy, sortBy } from "../../actions/filters";
import moment from 'moment';

test('should update text search filters', () => {
  expect(searchBy({
      text:"DummyText"
  })).toEqual({
    type: "SET_FILTERS",
    filters: {
        text:"DummyText",
        startDate: moment().startOf("year"),
        endDate: moment().endOf("year")
    }
  })
})

test('should update date search filters', () => {
  expect(searchBy({
      startDate:moment(0),
      endDate:moment(1000)
  })).toEqual({
    type: "SET_FILTERS",
    filters: {
        text:"",
        startDate: moment(0),
        endDate: moment(1000)
    }
  })
})

test('should update text and date search filters', () => {
  expect(searchBy({
      text: "DummyText",
      startDate:moment(0),
      endDate:moment(1000)
  })).toEqual({
    type: "SET_FILTERS",
    filters: {
        text:"DummyText",
        startDate: moment(0),
        endDate: moment(1000)
    }
  })
})

test('should update sort keys with provided value', () => {
  expect(sortBy({
      key:"DummyKey"
  })).toEqual({
    type: "SORT_BY_KEY",
    key: "DummyKey"
  })
})

test('should not update sort keys without provided value', () => {
  expect(sortBy({
      key:""
  })).toEqual({
    type: "NO_SORT"
  })
})
