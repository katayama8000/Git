fn main() {
    // say hello
    println!("Hello, world!");
    // 変数
    let x = 1;
    let y = 2;
}

// 円の面積を求める関数
fn circle_area(radius: f64) -> f64 {
    radius * radius * 3.14
}

// 円の体積を求める関数
fn circle_volume(radius: f64, height: f64) -> f64 {
    circle_area(radius) * height
}