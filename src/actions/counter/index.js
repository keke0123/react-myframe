export const UP_COUNT = 'UP_COUNT';
export const DOWN_COUNT = 'DOWN_COUNT';

export function upCount() {
    return {type: UP_COUNT};
    // return {type: ADD_TODO, 다른 값도 전달 가능}
}
export function downCount() {
    return {type: DOWN_COUNT};
}
