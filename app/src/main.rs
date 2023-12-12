fn main() {
    println!("Hello, world!");
    let ret = val::val(1., 2., 3., 4.);
    println!("{}", ret);
}

/// Returns a value of gaussian function.
///
/// # Examples
/// Returns a value of gaussian function.
///
/// ```
/// use fitting::gaussian::val;
///
/// let (mu, sigma, a): (f64, f64, f64) = (5., 3., 1.);
/// let x = 5.;
/// let y = val(x, mu, sigma, a);
/// assert_eq!(y, a);
///
/// ```
mod val {
    pub fn val(x: f64, mu: f64, sigma: f64, a: f64) -> f64 {
        a * (-(x - mu).powi(2) / (2. * sigma.powi(2))).exp()
    }
}