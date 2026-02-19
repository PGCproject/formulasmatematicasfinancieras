# Financial Mathematics Calculator / Calculadora de Matemáticas Financieras

Small, single-page web app to practice **simple-interest financial math**: future value, present value, simple interest, simple rate, commercial discount, effective value, and per-period rates from an annual nominal rate.

## How to run / Cómo usarla

- Just open `index.html` in a modern browser (Chrome, Edge, Safari, Firefox).
- No build step or server is required.

## Features / Características

- **Vanilla HTML, CSS & JavaScript. No frameworks.**
- **Bilingual interface (ES / EN)** — switch using the language pill in the header.
- **Minimal layout** with a formula selector, dynamic inputs, and a result panel.
- **Formulas implemented (simple interest)**:
  - Future value: `Vf = Vp (1 + i n)`
  - Present value: `Vp = Vf / (1 + i n)`
  - Simple interest: `I = Vf − Vp`
  - Simple rate from values: `i = (Vf / Vp − 1) / n`
  - Commercial discount: `D = Vf d n`
  - Effective value: `VE = Vf (1 − d n)`
  - Per-period rate from annual rate: `i = i_an / n`

All rates are entered as **percentages** (e.g. `11.25` for 11.25%) and internally converted to decimals.

## Example problems / Ejemplos

These are quick checks you can use to verify results:

- **Future value / Valor futuro**
  - Data: `Vp = 10,000`, `i = 2%` mensual, `n = 10` meses.
  - Expected: `Vf = 10,000 (1 + 0.02 × 10) = 12,000`.
- **Present value / Valor presente**
  - Data: `Vf = 12,000`, `i = 2%` mensual, `n = 10` meses.
  - Expected: `Vp ≈ 12,000 / (1 + 0.02 × 10) = 10,000`.
- **Simple interest / Interés simple**
  - Data: `Vf = 12,000`, `Vp = 10,000`.
  - Expected: `I = 2,000`.
- **Simple rate / Tasa simple**
  - Data: `Vf = 12,000`, `Vp = 10,000`, `n = 10` periodos.
  - Expected: `i = (12,000 / 10,000 − 1) / 10 = 0.02` → `2%` por periodo.


