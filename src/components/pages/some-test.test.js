function sum(...arr) {
    return arr.reduce((acc, el) => acc + el);
}

describe('Тесты функции sum', () => {
    it('2+1', () => {
        expect(sum(2, 1)).toEqual(3);
    });
    it('6+1', () => {
        expect(sum(6, 1)).toEqual(7);
    });
    it('8+1', () => {
        expect(sum(8, 1)).toEqual(9);
    });
    it('10+1', () => {
        expect(sum(10, 1)).toEqual(11);
    });
});