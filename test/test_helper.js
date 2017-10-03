import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
Object.defineProperty(window.location, 'href', {
  writable: true,
  value: 'http://example.com'
});

class localStorageMock {
    constructor(props) {
        this.store = {};
    }
    getItem(key) {return this.store[key] || null}
    setItem(key, value) {this.store[key] = value}
    removeItem(key) {delete this.store[key]}
}
Object.defineProperty(window, 'localStorage', {
  value: new localStorageMock
});
