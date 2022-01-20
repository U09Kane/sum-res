use wasm_bindgen::prelude::*;


#[wasm_bindgen]
pub fn sum(nums: Vec<i32>) -> i32 {
    let mut total = 0;

    for i in nums {
        total += i;
    }
    total
}
