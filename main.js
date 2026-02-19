const uiText = {
  es: {
    title: "Calculadora de Matemáticas Financieras",
    subtitle:
      "Practica fórmulas de interés simple y compuesto, anualidades, perpetuidades, CETES y tasas de interés.",
    formulaLabel: "Elige una fórmula",
    calculate: "Calcular",
    clear: "Limpiar",
    resultTitle: "Resultado",
    footerNote:
      "Esta herramienta es solo para fines educativos. Revisa siempre los supuestos de cada fórmula.",
    errors: {
      required: "Por favor completa todos los campos.",
      invalidNumber: "Revisa que todos los valores numéricos sean válidos.",
      negativeEffective:
        "La combinación de tasa y periodos hace que el valor efectivo sea negativo.",
    },
  },
  en: {
    title: "Financial Mathematics Calculator",
    subtitle:
      "Practice simple and compound interest, annuities, perpetuities, CETES valuation, and rate conversions.",
    formulaLabel: "Choose a formula",
    calculate: "Calculate",
    clear: "Clear",
    resultTitle: "Result",
    footerNote:
      "This tool is for educational purposes only. Always review each formula’s assumptions.",
    errors: {
      required: "Please fill in all fields.",
      invalidNumber: "Make sure all numeric values are valid.",
      negativeEffective:
        "The combination of rate and periods makes the effective value negative.",
    },
  },
};

const formulaCategories = {
  simple_interest: {
    id: "simple_interest",
    labels: {
      es: "Interés simple",
      en: "Simple interest",
    },
  },
  discount: {
    id: "discount",
    labels: {
      es: "Descuentos / CETES",
      en: "Discounts / CETES",
    },
  },
  compound_interest: {
    id: "compound_interest",
    labels: {
      es: "Interés compuesto",
      en: "Compound interest",
    },
  },
  annuities_vencidas: {
    id: "annuities_vencidas",
    labels: {
      es: "Anualidades vencidas",
      en: "Ordinary annuities",
    },
  },
  annuities_anticipadas: {
    id: "annuities_anticipadas",
    labels: {
      es: "Anualidades anticipadas",
      en: "Annuities due",
    },
  },
  deferred_annuities: {
    id: "deferred_annuities",
    labels: {
      es: "Anualidades diferidas",
      en: "Deferred annuities",
    },
  },
  perpetuities: {
    id: "perpetuities",
    labels: {
      es: "Perpetuidades",
      en: "Perpetuities",
    },
  },
  rate_conversions: {
    id: "rate_conversions",
    labels: {
      es: "Tasas de interés",
      en: "Interest rates",
    },
  },
};

// Mapa de temas para filtrar el selector
const topics = {
  all: null,
  simple_interest: ["simple_interest"],
  discount: ["discount"],
  compound_interest: ["compound_interest"],
  annuities: ["annuities_vencidas", "annuities_anticipadas"],
  deferred_annuities: ["deferred_annuities"],
  perpetuities: ["perpetuities"],
  rate_conversions: ["rate_conversions"],
};

function getCategoryLabel(categoryId) {
  if (!categoryId) return "";
  const cat = formulaCategories[categoryId];
  if (!cat) return "";
  return cat.labels[currentLang] || "";
}

const formulas = {
  future_value_simple: {
    id: "future_value_simple",
    symbol: "Vf = Vp (1 + i n)",
    names: {
      es: "Valor futuro",
      en: "Future value (simple interest)",
    },
    category: "simple_interest",
    description: {
      es: "Calcula el valor futuro de una inversión con interés simple.",
      en: "Computes the future value of an investment under simple interest.",
    },
    resultSymbol: "Vf",
    inputs: [
      {
        id: "Vp",
        type: "amount",
        labels: { es: "Valor presente Vp", en: "Present value Vp" },
        placeholder: { es: "Cantidad inicial", en: "Initial amount" },
      },
      {
        id: "i",
        type: "rate",
        labels: {
          es: "Tasa simple por periodo i (%)",
          en: "Simple rate per period i (%)",
        },
        placeholder: { es: "Porcentaje por periodo", en: "Percent per period" },
      },
      {
        id: "n",
        type: "periods",
        labels: { es: "Número de periodos n", en: "Number of periods n" },
        placeholder: { es: "Meses, años, etc.", en: "Months, years, etc." },
      },
    ],
    compute: ({ Vp, i, n }) => Vp * (1 + i * n),
  },
  present_value_simple: {
    id: "present_value_simple",
    symbol: "Vp = Vf / (1 + i n)",
    names: {
      es: "Valor presente",
      en: "Present value (simple interest)",
    },
    category: "simple_interest",
    description: {
      es: "Calcula el valor presente equivalente de un monto futuro con interés simple.",
      en: "Computes the present value equivalent of a future amount under simple interest.",
    },
    resultSymbol: "Vp",
    inputs: [
      {
        id: "Vf",
        type: "amount",
        labels: { es: "Valor futuro Vf", en: "Future value Vf" },
        placeholder: { es: "Monto futuro", en: "Future amount" },
      },
      {
        id: "i",
        type: "rate",
        labels: {
          es: "Tasa simple por periodo i (%)",
          en: "Simple rate per period i (%)",
        },
        placeholder: { es: "Porcentaje por periodo", en: "Percent per period" },
      },
      {
        id: "n",
        type: "periods",
        labels: { es: "Número de periodos n", en: "Number of periods n" },
        placeholder: { es: "Meses, años, etc.", en: "Months, years, etc." },
      },
    ],
    compute: ({ Vf, i, n }) => Vf / (1 + i * n),
  },
  simple_interest: {
    id: "simple_interest",
    symbol: "I = Vp i n",
    names: {
      es: "Interés",
      en: "Simple interest",
    },
    category: "simple_interest",
    description: {
      es: "Calcula el interés simple generado por una inversión.",
      en: "Calculates the simple interest generated by an investment.",
    },
    resultSymbol: "I",
    inputs: [
      {
        id: "Vp",
        type: "amount",
        labels: { es: "Valor presente Vp", en: "Present value Vp" },
        placeholder: { es: "Monto inicial", en: "Initial amount" },
      },
      {
        id: "i",
        type: "rate",
        labels: {
          es: "Tasa simple por periodo i (%)",
          en: "Simple rate per period i (%)",
        },
        placeholder: {
          es: "Porcentaje por periodo",
          en: "Percent per period",
        },
      },
      {
        id: "n",
        type: "periods",
        labels: { es: "Número de periodos n", en: "Number of periods n" },
        placeholder: { es: "Meses, años, etc.", en: "Months, years, etc." },
      },
    ],
    compute: ({ Vp, i, n }) => Vp * i * n,
  },
  future_value_from_interest: {
    id: "future_value_from_interest",
    symbol: "Vf = Vp + I",
    category: "simple_interest",
    names: {
      es: "Valor futuro (con interés)",
      en: "Future value from interest",
    },
    description: {
      es: "Calcula el valor futuro sumando el interés simple al valor presente.",
      en: "Computes the future value by adding simple interest to the present value.",
    },
    resultSymbol: "Vf",
    inputs: [
      {
        id: "Vp",
        type: "amount",
        labels: { es: "Valor presente Vp", en: "Present value Vp" },
        placeholder: { es: "Monto inicial", en: "Initial amount" },
      },
      {
        id: "I",
        type: "amount",
        labels: { es: "Interés I", en: "Interest I" },
        placeholder: { es: "Interés generado", en: "Interest earned" },
      },
    ],
    compute: ({ Vp, I }) => Vp + I,
  },
  simple_time_from_future: {
    id: "simple_time_from_future",
    symbol: "n = (Vf / Vp − 1) / i",
    category: "simple_interest",
    names: {
      es: "Plazo n (interés simple, dado Vf y Vp)",
      en: "Time n (simple interest, given Vf and Vp)",
    },
    description: {
      es: "Calcula el número de periodos n con interés simple a partir del valor presente y futuro.",
      en: "Computes the number of periods n under simple interest from present and future value.",
    },
    resultSymbol: "n",
    inputs: [
      {
        id: "Vf",
        type: "amount",
        labels: { es: "Valor futuro Vf", en: "Future value Vf" },
        placeholder: { es: "Monto futuro", en: "Future amount" },
      },
      {
        id: "Vp",
        type: "amount",
        labels: { es: "Valor presente Vp", en: "Present value Vp" },
        placeholder: { es: "Monto inicial", en: "Initial amount" },
      },
      {
        id: "i",
        type: "rate",
        labels: {
          es: "Tasa simple por periodo i (%)",
          en: "Simple rate per period i (%)",
        },
        placeholder: {
          es: "Porcentaje por periodo",
          en: "Percent per period",
        },
      },
    ],
    compute: ({ Vf, Vp, i }) => (Vf / Vp - 1) / i,
  },
  simple_time_from_interest: {
    id: "simple_time_from_interest",
    symbol: "n = I / (Vp i)",
    category: "simple_interest",
    names: {
      es: "Plazo n (interés simple, dado I y Vp)",
      en: "Time n (simple interest, given I and Vp)",
    },
    description: {
      es: "Calcula el número de periodos n con interés simple a partir del interés generado y el valor presente.",
      en: "Computes the number of periods n under simple interest from interest earned and present value.",
    },
    resultSymbol: "n",
    inputs: [
      {
        id: "I",
        type: "amount",
        labels: { es: "Interés I", en: "Interest I" },
        placeholder: { es: "Interés generado", en: "Interest earned" },
      },
      {
        id: "Vp",
        type: "amount",
        labels: { es: "Valor presente Vp", en: "Present value Vp" },
        placeholder: { es: "Monto inicial", en: "Initial amount" },
      },
      {
        id: "i",
        type: "rate",
        labels: {
          es: "Tasa simple por periodo i (%)",
          en: "Simple rate per period i (%)",
        },
        placeholder: {
          es: "Porcentaje por periodo",
          en: "Percent per period",
        },
      },
    ],
    compute: ({ I, Vp, i }) => I / (Vp * i),
  },
  simple_rate: {
    id: "simple_rate",
    symbol: "i = (Vf / Vp − 1) / n",
    names: {
      es: "Tasa de interés simple",
      en: "Simple interest rate",
    },
    category: "simple_interest",
    description: {
      es: "Obtiene la tasa de interés simple a partir del valor presente y futuro.",
      en: "Finds the simple interest rate from present and future values.",
    },
    resultSymbol: "i",
    resultIsRate: true,
    inputs: [
      {
        id: "Vf",
        type: "amount",
        labels: { es: "Valor futuro Vf", en: "Future value Vf" },
        placeholder: { es: "Monto futuro", en: "Future amount" },
      },
      {
        id: "Vp",
        type: "amount",
        labels: { es: "Valor presente Vp", en: "Present value Vp" },
        placeholder: { es: "Monto inicial", en: "Initial amount" },
      },
      {
        id: "n",
        type: "periods",
        labels: { es: "Número de periodos n", en: "Number of periods n" },
        placeholder: { es: "Meses, años, etc.", en: "Months, years, etc." },
      },
    ],
    compute: ({ Vf, Vp, n }) => (Vf / Vp - 1) / n,
  },
  commercial_discount: {
    id: "commercial_discount",
    symbol: "D = Vf d n",
    names: {
      es: "Descuento comercial D",
      en: "Commercial discount D",
    },
    category: "discount",
    description: {
      es: "Calcula el descuento comercial aplicado a un valor futuro.",
      en: "Computes the commercial discount applied to a future value.",
    },
    resultSymbol: "D",
    inputs: [
      {
        id: "Vf",
        type: "amount",
        labels: { es: "Valor futuro Vf", en: "Future value Vf" },
        placeholder: { es: "Monto futuro", en: "Future amount" },
      },
      {
        id: "d",
        type: "rate",
        labels: {
          es: "Tasa de descuento d (%)",
          en: "Discount rate d (%)",
        },
        placeholder: {
          es: "Porcentaje de descuento",
          en: "Discount percentage",
        },
      },
      {
        id: "n",
        type: "periods",
        labels: { es: "Número de periodos n", en: "Number of periods n" },
        placeholder: { es: "Meses, años, etc.", en: "Months, years, etc." },
      },
    ],
    compute: ({ Vf, d, n }) => Vf * d * n,
  },
  effective_value: {
    id: "effective_value",
    symbol: "VE = Vf (1 − d n)",
    names: {
      es: "Valor efectivo VE",
      en: "Effective value VE",
    },
    category: "discount",
    description: {
      es: "Calcula el valor efectivo después del descuento comercial.",
      en: "Computes the effective value after commercial discount.",
    },
    resultSymbol: "VE",
    inputs: [
      {
        id: "Vf",
        type: "amount",
        labels: { es: "Valor futuro Vf", en: "Future value Vf" },
        placeholder: { es: "Monto futuro", en: "Future amount" },
      },
      {
        id: "d",
        type: "rate",
        labels: {
          es: "Tasa de descuento d (%)",
          en: "Discount rate d (%)",
        },
        placeholder: {
          es: "Porcentaje de descuento",
          en: "Discount percentage",
        },
      },
      {
        id: "n",
        type: "periods",
        labels: { es: "Número de periodos n", en: "Number of periods n" },
        placeholder: { es: "Meses, años, etc.", en: "Months, years, etc." },
      },
    ],
    compute: ({ Vf, d, n }) => Vf * (1 - d * n),
    validate: ({ d, n }) => 1 - d * n >= 0,
  },
  period_rate_from_annual: {
    id: "period_rate_from_annual",
    symbol: "i = i_an / n",
    names: {
      es: "Tasa por periodo desde tasa anual",
      en: "Per-period rate from annual rate",
    },
    category: "rate_conversions",
    description: {
      es: "Convierte una tasa anual nominal en la tasa simple por periodo.",
      en: "Converts a nominal annual rate into a simple rate per period.",
    },
    resultSymbol: "i",
    resultIsRate: true,
    inputs: [
      {
        id: "ian",
        type: "rate",
        labels: {
          es: "Tasa anual nominal i_an (%)",
          en: "Annual nominal rate i_an (%)",
        },
        placeholder: {
          es: "Porcentaje anual",
          en: "Annual percentage",
        },
      },
      {
        id: "n",
        type: "periods",
        labels: {
          es: "Número de periodos por año n",
          en: "Number of periods per year n",
        },
        placeholder: { es: "Por ejemplo 12", en: "For example 12" },
      },
    ],
    compute: ({ ian, n }) => ian / n,
  },

  // --- CETES / discount-based valuation ---
  cetes_present_from_discount: {
    id: "cetes_present_from_discount",
    symbol: "Vp = Vf (1 − d n / 360)",
    names: {
      es: "Vp de CETE con tasa de descuento",
      en: "CETE present value from discount rate",
    },
    category: "discount",
    description: {
      es: "Calcula el valor presente de un CETE usando tasa de descuento simple sobre base 360 días.",
      en: "Computes the present value of a CETE using a simple discount rate on a 360‑day basis.",
    },
    resultSymbol: "Vp",
    inputs: [
      {
        id: "Vf",
        type: "amount",
        labels: { es: "Valor futuro Vf", en: "Future value Vf" },
        placeholder: { es: "Valor nominal del CETE", en: "CETE face value" },
      },
      {
        id: "d",
        type: "rate",
        labels: {
          es: "Tasa de descuento d (%)",
          en: "Discount rate d (%)",
        },
        placeholder: {
          es: "Porcentaje de descuento anual",
          en: "Annual discount percentage",
        },
      },
      {
        id: "n",
        type: "periods",
        labels: {
          es: "Plazo en días n",
          en: "Term in days n",
        },
        placeholder: { es: "Días al vencimiento", en: "Days to maturity" },
      },
    ],
    compute: ({ Vf, d, n }) => Vf * (1 - (d * n) / 360),
    validate: ({ d, n }) => 1 - (d * n) / 360 >= 0,
  },
  cetes_present_from_yield: {
    id: "cetes_present_from_yield",
    symbol: "Vp = Vf (1 + t_r n / 360)^{-1}",
    names: {
      es: "Vp de CETE con tasa de rendimiento",
      en: "CETE present value from yield rate",
    },
    category: "discount",
    description: {
      es: "Calcula el valor presente de un CETE usando tasa de rendimiento anual simple sobre 360 días.",
      en: "Computes the present value of a CETE using an annual simple yield rate on a 360‑day basis.",
    },
    resultSymbol: "Vp",
    inputs: [
      {
        id: "Vf",
        type: "amount",
        labels: { es: "Valor futuro Vf", en: "Future value Vf" },
        placeholder: { es: "Valor nominal del CETE", en: "CETE face value" },
      },
      {
        id: "tr",
        type: "rate",
        labels: {
          es: "Tasa de rendimiento t_r (%)",
          en: "Yield rate t_r (%)",
        },
        placeholder: {
          es: "Porcentaje de rendimiento anual",
          en: "Annual yield percentage",
        },
      },
      {
        id: "n",
        type: "periods",
        labels: {
          es: "Plazo en días n",
          en: "Term in days n",
        },
        placeholder: { es: "Días al vencimiento", en: "Days to maturity" },
      },
    ],
    compute: ({ Vf, tr, n }) => Vf / (1 + (tr * n) / 360),
  },
  cetes_yield_from_prices: {
    id: "cetes_yield_from_prices",
    symbol: "t_r = (Vf − Vp) / Vp",
    names: {
      es: "Tasa de rendimiento de CETE",
      en: "CETE yield rate from prices",
    },
    category: "discount",
    description: {
      es: "Calcula la tasa de rendimiento simple a partir del valor nominal y el valor presente de un CETE.",
      en: "Computes the simple yield rate from the face value and present price of a CETE.",
    },
    resultSymbol: "t_r",
    resultIsRate: true,
    inputs: [
      {
        id: "Vf",
        type: "amount",
        labels: { es: "Valor futuro Vf", en: "Future value Vf" },
        placeholder: { es: "Valor nominal del CETE", en: "CETE face value" },
      },
      {
        id: "Vp",
        type: "amount",
        labels: { es: "Valor presente Vp", en: "Present value Vp" },
        placeholder: {
          es: "Precio actual del CETE",
          en: "Current CETE price",
        },
      },
    ],
    compute: ({ Vf, Vp }) => (Vf - Vp) / Vp,
  },

  // --- Compound interest ---
  compound_future_value: {
    id: "compound_future_value",
    symbol: "Vf = Vp (1 + i)^n",
    names: {
      es: "Valor futuro (interés compuesto)",
      en: "Future value (compound interest)",
    },
    category: "compound_interest",
    description: {
      es: "Calcula el valor futuro de una inversión con interés compuesto.",
      en: "Computes the future value of an investment under compound interest.",
    },
    resultSymbol: "Vf",
    inputs: [
      {
        id: "Vp",
        type: "amount",
        labels: { es: "Valor presente Vp", en: "Present value Vp" },
        placeholder: { es: "Cantidad inicial", en: "Initial amount" },
      },
      {
        id: "i",
        type: "rate",
        labels: {
          es: "Tasa efectiva por periodo i (%)",
          en: "Effective rate per period i (%)",
        },
        placeholder: {
          es: "Porcentaje por periodo",
          en: "Percent per period",
        },
      },
      {
        id: "n",
        type: "periods",
        labels: { es: "Número de periodos n", en: "Number of periods n" },
        placeholder: { es: "Meses, años, etc.", en: "Months, years, etc." },
      },
    ],
    compute: ({ Vp, i, n }) => Vp * Math.pow(1 + i, n),
  },
  compound_present_value: {
    id: "compound_present_value",
    symbol: "Vp = Vf / (1 + i)^n",
    names: {
      es: "Valor presente (interés compuesto)",
      en: "Present value (compound interest)",
    },
    category: "compound_interest",
    description: {
      es: "Calcula el valor presente equivalente de un monto futuro con interés compuesto.",
      en: "Computes the present value equivalent of a future amount under compound interest.",
    },
    resultSymbol: "Vp",
    inputs: [
      {
        id: "Vf",
        type: "amount",
        labels: { es: "Valor futuro Vf", en: "Future value Vf" },
        placeholder: { es: "Monto futuro", en: "Future amount" },
      },
      {
        id: "i",
        type: "rate",
        labels: {
          es: "Tasa efectiva por periodo i (%)",
          en: "Effective rate per period i (%)",
        },
        placeholder: {
          es: "Porcentaje por periodo",
          en: "Percent per period",
        },
      },
      {
        id: "n",
        type: "periods",
        labels: { es: "Número de periodos n", en: "Number of periods n" },
        placeholder: { es: "Meses, años, etc.", en: "Months, years, etc." },
      },
    ],
    compute: ({ Vf, i, n }) => Vf / Math.pow(1 + i, n),
  },
  compound_time_from_values: {
    id: "compound_time_from_values",
    symbol: "n = log(Vf / Vp) / log(1 + i)",
    names: {
      es: "Plazo n (interés compuesto)",
      en: "Time n (compound interest)",
    },
    category: "compound_interest",
    description: {
      es: "Obtiene el número de periodos n a partir del valor presente, futuro y la tasa compuesta.",
      en: "Finds the number of periods n from present value, future value, and compound rate.",
    },
    resultSymbol: "n",
    inputs: [
      {
        id: "Vf",
        type: "amount",
        labels: { es: "Valor futuro Vf", en: "Future value Vf" },
        placeholder: { es: "Monto futuro", en: "Future amount" },
      },
      {
        id: "Vp",
        type: "amount",
        labels: { es: "Valor presente Vp", en: "Present value Vp" },
        placeholder: { es: "Monto inicial", en: "Initial amount" },
      },
      {
        id: "i",
        type: "rate",
        labels: {
          es: "Tasa efectiva por periodo i (%)",
          en: "Effective rate per period i (%)",
        },
        placeholder: {
          es: "Porcentaje por periodo",
          en: "Percent per period",
        },
      },
    ],
    compute: ({ Vf, Vp, i }) => Math.log(Vf / Vp) / Math.log(1 + i),
  },
  compound_rate_from_values: {
    id: "compound_rate_from_values",
    symbol: "i = (Vf / Vp)^{1/n} − 1",
    names: {
      es: "Tasa i (interés compuesto)",
      en: "Rate i (compound interest)",
    },
    category: "compound_interest",
    description: {
      es: "Obtiene la tasa de interés compuesta a partir del valor presente, futuro y el plazo.",
      en: "Finds the compound interest rate from present value, future value, and time.",
    },
    resultSymbol: "i",
    resultIsRate: true,
    inputs: [
      {
        id: "Vf",
        type: "amount",
        labels: { es: "Valor futuro Vf", en: "Future value Vf" },
        placeholder: { es: "Monto futuro", en: "Future amount" },
      },
      {
        id: "Vp",
        type: "amount",
        labels: { es: "Valor presente Vp", en: "Present value Vp" },
        placeholder: { es: "Monto inicial", en: "Initial amount" },
      },
      {
        id: "n",
        type: "periods",
        labels: { es: "Número de periodos n", en: "Number of periods n" },
        placeholder: { es: "Meses, años, etc.", en: "Months, years, etc." },
      },
    ],
    compute: ({ Vf, Vp, n }) => Math.pow(Vf / Vp, 1 / n) - 1,
  },

  // --- Annuities: ordinary (vencidas) ---
  annuity_vencida_future_value: {
    id: "annuity_vencida_future_value",
    symbol: "Vf = A ((1 + i)^n − 1) / i",
    names: {
      es: "Vf de anualidad vencida",
      en: "Future value of ordinary annuity",
    },
    category: "annuities_vencidas",
    description: {
      es: "Calcula el valor futuro de una anualidad vencida con pagos al final de cada periodo.",
      en: "Computes the future value of an ordinary annuity with payments at period end.",
    },
    resultSymbol: "Vf",
    inputs: [
      {
        id: "A",
        type: "amount",
        labels: { es: "Renta periódica A", en: "Periodic payment A" },
        placeholder: {
          es: "Pago por periodo",
          en: "Payment per period",
        },
      },
      {
        id: "i",
        type: "rate",
        labels: {
          es: "Tasa por periodo i (%)",
          en: "Rate per period i (%)",
        },
        placeholder: {
          es: "Porcentaje por periodo",
          en: "Percent per period",
        },
      },
      {
        id: "n",
        type: "periods",
        labels: { es: "Número de periodos n", en: "Number of periods n" },
        placeholder: { es: "Número de pagos", en: "Number of payments" },
      },
    ],
    compute: ({ A, i, n }) => A * ((Math.pow(1 + i, n) - 1) / i),
  },
  annuity_vencida_payment_from_future: {
    id: "annuity_vencida_payment_from_future",
    symbol: "A = Vf i / ((1 + i)^n − 1)",
    names: {
      es: "Renta A de anualidad vencida (dado Vf)",
      en: "Payment A of ordinary annuity (given Vf)",
    },
    category: "annuities_vencidas",
    description: {
      es: "Calcula la renta periódica de una anualidad vencida a partir del valor futuro.",
      en: "Computes the periodic payment of an ordinary annuity from its future value.",
    },
    resultSymbol: "A",
    inputs: [
      {
        id: "Vf",
        type: "amount",
        labels: { es: "Valor futuro Vf", en: "Future value Vf" },
        placeholder: { es: "Monto acumulado", en: "Accumulated amount" },
      },
      {
        id: "i",
        type: "rate",
        labels: {
          es: "Tasa por periodo i (%)",
          en: "Rate per period i (%)",
        },
        placeholder: {
          es: "Porcentaje por periodo",
          en: "Percent per period",
        },
      },
      {
        id: "n",
        type: "periods",
        labels: { es: "Número de periodos n", en: "Number of periods n" },
        placeholder: { es: "Número de pagos", en: "Number of payments" },
      },
    ],
    compute: ({ Vf, i, n }) => (Vf * i) / (Math.pow(1 + i, n) - 1),
  },
  annuity_vencida_time_from_future: {
    id: "annuity_vencida_time_from_future",
    symbol: "n = log(Vf i / A + 1) / log(1 + i)",
    names: {
      es: "Plazo n de anualidad vencida (dado Vf)",
      en: "Time n of ordinary annuity (given Vf)",
    },
    category: "annuities_vencidas",
    description: {
      es: "Obtiene el número de periodos de una anualidad vencida a partir de la renta, tasa y valor futuro.",
      en: "Finds the number of periods of an ordinary annuity from payment, rate, and future value.",
    },
    resultSymbol: "n",
    inputs: [
      {
        id: "Vf",
        type: "amount",
        labels: { es: "Valor futuro Vf", en: "Future value Vf" },
        placeholder: { es: "Monto acumulado", en: "Accumulated amount" },
      },
      {
        id: "A",
        type: "amount",
        labels: { es: "Renta periódica A", en: "Periodic payment A" },
        placeholder: {
          es: "Pago por periodo",
          en: "Payment per period",
        },
      },
      {
        id: "i",
        type: "rate",
        labels: {
          es: "Tasa por periodo i (%)",
          en: "Rate per period i (%)",
        },
        placeholder: {
          es: "Porcentaje por periodo",
          en: "Percent per period",
        },
      },
    ],
    compute: ({ Vf, A, i }) =>
      Math.log((Vf * i) / A + 1) / Math.log(1 + i),
  },
  annuity_vencida_present_value: {
    id: "annuity_vencida_present_value",
    symbol: "Vp = A [1 − (1 + i)^{-n}] / i",
    names: {
      es: "Vp de anualidad vencida",
      en: "Present value of ordinary annuity",
    },
    category: "annuities_vencidas",
    description: {
      es: "Calcula el valor presente de una anualidad vencida.",
      en: "Computes the present value of an ordinary annuity.",
    },
    resultSymbol: "Vp",
    inputs: [
      {
        id: "A",
        type: "amount",
        labels: { es: "Renta periódica A", en: "Periodic payment A" },
        placeholder: {
          es: "Pago por periodo",
          en: "Payment per period",
        },
      },
      {
        id: "i",
        type: "rate",
        labels: {
          es: "Tasa por periodo i (%)",
          en: "Rate per period i (%)",
        },
        placeholder: {
          es: "Porcentaje por periodo",
          en: "Percent per period",
        },
      },
      {
        id: "n",
        type: "periods",
        labels: { es: "Número de periodos n", en: "Number of periods n" },
        placeholder: { es: "Número de pagos", en: "Number of payments" },
      },
    ],
    compute: ({ A, i, n }) =>
      A * ((1 - Math.pow(1 + i, -n)) / i),
  },
  annuity_vencida_payment_from_present: {
    id: "annuity_vencida_payment_from_present",
    symbol: "A = Vp i / (1 − (1 + i)^{-n})",
    names: {
      es: "Renta A de anualidad vencida (dado Vp)",
      en: "Payment A of ordinary annuity (given Vp)",
    },
    category: "annuities_vencidas",
    description: {
      es: "Calcula la renta periódica de una anualidad vencida a partir de su valor presente.",
      en: "Computes the periodic payment of an ordinary annuity from its present value.",
    },
    resultSymbol: "A",
    inputs: [
      {
        id: "Vp",
        type: "amount",
        labels: { es: "Valor presente Vp", en: "Present value Vp" },
        placeholder: { es: "Valor actual", en: "Present value" },
      },
      {
        id: "i",
        type: "rate",
        labels: {
          es: "Tasa por periodo i (%)",
          en: "Rate per period i (%)",
        },
        placeholder: {
          es: "Porcentaje por periodo",
          en: "Percent per period",
        },
      },
      {
        id: "n",
        type: "periods",
        labels: { es: "Número de periodos n", en: "Number of periods n" },
        placeholder: { es: "Número de pagos", en: "Number of payments" },
      },
    ],
    compute: ({ Vp, i, n }) =>
      (Vp * i) / (1 - Math.pow(1 + i, -n)),
  },
  annuity_vencida_time_from_present: {
    id: "annuity_vencida_time_from_present",
    symbol: "n = −log(1 − Vp i / A) / log(1 + i)",
    names: {
      es: "Plazo n de anualidad vencida (dado Vp)",
      en: "Time n of ordinary annuity (given Vp)",
    },
    category: "annuities_vencidas",
    description: {
      es: "Obtiene el número de periodos de una anualidad vencida a partir de la renta, tasa y valor presente.",
      en: "Finds the number of periods of an ordinary annuity from payment, rate, and present value.",
    },
    resultSymbol: "n",
    inputs: [
      {
        id: "Vp",
        type: "amount",
        labels: { es: "Valor presente Vp", en: "Present value Vp" },
        placeholder: { es: "Valor actual", en: "Present value" },
      },
      {
        id: "A",
        type: "amount",
        labels: { es: "Renta periódica A", en: "Periodic payment A" },
        placeholder: {
          es: "Pago por periodo",
          en: "Payment per period",
        },
      },
      {
        id: "i",
        type: "rate",
        labels: {
          es: "Tasa por periodo i (%)",
          en: "Rate per period i (%)",
        },
        placeholder: {
          es: "Porcentaje por periodo",
          en: "Percent per period",
        },
      },
    ],
    compute: ({ Vp, A, i }) =>
      -Math.log(1 - (Vp * i) / A) / Math.log(1 + i),
  },

  // --- Annuities: due (anticipadas) ---
  annuity_anticipada_future_value: {
    id: "annuity_anticipada_future_value",
    symbol: "Vf = A ((1 + i)^n − 1) / i (1 + i)",
    names: {
      es: "Vf de anualidad anticipada",
      en: "Future value of annuity due",
    },
    category: "annuities_anticipadas",
    description: {
      es: "Calcula el valor futuro de una anualidad anticipada con pagos al inicio de cada periodo.",
      en: "Computes the future value of an annuity due with payments at the beginning of each period.",
    },
    resultSymbol: "Vf",
    inputs: [
      {
        id: "A",
        type: "amount",
        labels: { es: "Renta periódica A", en: "Periodic payment A" },
        placeholder: {
          es: "Pago por periodo",
          en: "Payment per period",
        },
      },
      {
        id: "i",
        type: "rate",
        labels: {
          es: "Tasa por periodo i (%)",
          en: "Rate per period i (%)",
        },
        placeholder: {
          es: "Porcentaje por periodo",
          en: "Percent per period",
        },
      },
      {
        id: "n",
        type: "periods",
        labels: { es: "Número de periodos n", en: "Number of periods n" },
        placeholder: { es: "Número de pagos", en: "Number of payments" },
      },
    ],
    compute: ({ A, i, n }) =>
      A * ((Math.pow(1 + i, n) - 1) / i) * (1 + i),
  },
  annuity_anticipada_present_value: {
    id: "annuity_anticipada_present_value",
    symbol: "Vp = A [1 − (1 + i)^{-n}] / i (1 + i)",
    names: {
      es: "Vp de anualidad anticipada",
      en: "Present value of annuity due",
    },
    category: "annuities_anticipadas",
    description: {
      es: "Calcula el valor presente de una anualidad anticipada.",
      en: "Computes the present value of an annuity due.",
    },
    resultSymbol: "Vp",
    inputs: [
      {
        id: "A",
        type: "amount",
        labels: { es: "Renta periódica A", en: "Periodic payment A" },
        placeholder: {
          es: "Pago por periodo",
          en: "Payment per period",
        },
      },
      {
        id: "i",
        type: "rate",
        labels: {
          es: "Tasa por periodo i (%)",
          en: "Rate per period i (%)",
        },
        placeholder: {
          es: "Porcentaje por periodo",
          en: "Percent per period",
        },
      },
      {
        id: "n",
        type: "periods",
        labels: { es: "Número de periodos n", en: "Number of periods n" },
        placeholder: { es: "Número de pagos", en: "Number of payments" },
      },
    ],
    compute: ({ A, i, n }) =>
      A * ((1 - Math.pow(1 + i, -n)) / i) * (1 + i),
  },

  // --- Deferred annuities (simplified block) ---
  deferred_annuity_present_value: {
    id: "deferred_annuity_present_value",
    symbol: "Vp = A [1 − (1 + i)^{-n}] / i (1 + i)^{-k}",
    names: {
      es: "Vp de anualidad diferida",
      en: "Present value of deferred annuity",
    },
    category: "deferred_annuities",
    description: {
      es: "Calcula el valor presente de una anualidad diferida, con k periodos de diferimiento.",
      en: "Computes the present value of a deferred annuity with k deferral periods.",
    },
    resultSymbol: "Vp",
    inputs: [
      {
        id: "A",
        type: "amount",
        labels: { es: "Renta periódica A", en: "Periodic payment A" },
        placeholder: {
          es: "Pago por periodo",
          en: "Payment per period",
        },
      },
      {
        id: "i",
        type: "rate",
        labels: {
          es: "Tasa por periodo i (%)",
          en: "Rate per period i (%)",
        },
        placeholder: {
          es: "Porcentaje por periodo",
          en: "Percent per period",
        },
      },
      {
        id: "n",
        type: "periods",
        labels: {
          es: "Número de rentas n",
          en: "Number of payments n",
        },
        placeholder: { es: "Número de pagos", en: "Number of payments" },
      },
      {
        id: "k",
        type: "periods",
        labels: {
          es: "Periodos de diferimiento k",
          en: "Deferral periods k",
        },
        placeholder: {
          es: "Periodos antes del primer pago",
          en: "Periods before first payment",
        },
      },
    ],
    compute: ({ A, i, n, k }) =>
      A * ((1 - Math.pow(1 + i, -n)) / i) * Math.pow(1 + i, -k),
  },

  // --- Perpetuities ---
  perpetuity_present_value: {
    id: "perpetuity_present_value",
    symbol: "Vp = Ap / i",
    names: {
      es: "Vp de perpetuidad",
      en: "Present value of perpetuity",
    },
    category: "perpetuities",
    description: {
      es: "Calcula el valor presente de una perpetuidad con pago periódico constante.",
      en: "Computes the present value of a perpetuity with constant periodic payment.",
    },
    resultSymbol: "Vp",
    inputs: [
      {
        id: "Ap",
        type: "amount",
        labels: { es: "Pago perpetuo Ap", en: "Perpetual payment Ap" },
        placeholder: {
          es: "Pago periódico",
          en: "Periodic payment",
        },
      },
      {
        id: "i",
        type: "rate",
        labels: {
          es: "Tasa por periodo i (%)",
          en: "Rate per period i (%)",
        },
        placeholder: {
          es: "Porcentaje por periodo",
          en: "Percent per period",
        },
      },
    ],
    compute: ({ Ap, i }) => Ap / i,
  },
  perpetuity_payment_from_investment: {
    id: "perpetuity_payment_from_investment",
    symbol: "Ap = P × i",
    names: {
      es: "Pago de perpetuidad a partir de inversión",
      en: "Perpetuity payment from investment",
    },
    category: "perpetuities",
    description: {
      es: "Calcula el pago periódico de una perpetuidad dado el capital invertido.",
      en: "Computes the periodic perpetuity payment given the invested principal.",
    },
    resultSymbol: "Ap",
    inputs: [
      {
        id: "P",
        type: "amount",
        labels: { es: "Capital P", en: "Principal P" },
        placeholder: {
          es: "Monto invertido",
          en: "Invested amount",
        },
      },
      {
        id: "i",
        type: "rate",
        labels: {
          es: "Tasa por periodo i (%)",
          en: "Rate per period i (%)",
        },
        placeholder: {
          es: "Porcentaje por periodo",
          en: "Percent per period",
        },
      },
    ],
    compute: ({ P, i }) => P * i,
  },

  // --- Interest rate conversions ---
  effective_annual_from_nominal: {
    id: "effective_annual_from_nominal",
    symbol: "i_a = (1 + j/m)^m − 1",
    names: {
      es: "Tasa anual efectiva desde tasa nominal",
      en: "Effective annual rate from nominal",
    },
    category: "rate_conversions",
    description: {
      es: "Convierte una tasa nominal anual capitalizable m veces al año en tasa anual efectiva.",
      en: "Converts a nominal annual rate compounded m times per year into an effective annual rate.",
    },
    resultSymbol: "i_a",
    resultIsRate: true,
    inputs: [
      {
        id: "j",
        type: "rate",
        labels: {
          es: "Tasa nominal anual j (%)",
          en: "Nominal annual rate j (%)",
        },
        placeholder: {
          es: "Porcentaje nominal anual",
          en: "Nominal annual percentage",
        },
      },
      {
        id: "m",
        type: "periods",
        labels: {
          es: "Periodos de capitalización por año m",
          en: "Compounding periods per year m",
        },
        placeholder: {
          es: "Por ejemplo 12, 4, 2",
          en: "For example 12, 4, 2",
        },
      },
    ],
    compute: ({ j, m }) => Math.pow(1 + j / m, m) - 1,
  },
  nominal_from_effective_annual: {
    id: "nominal_from_effective_annual",
    symbol: "j = m ((1 + i_a)^{1/m} − 1)",
    names: {
      es: "Tasa nominal desde tasa anual efectiva",
      en: "Nominal annual rate from effective",
    },
    category: "rate_conversions",
    description: {
      es: "Convierte una tasa anual efectiva en una tasa nominal anual con m capitalizaciones al año.",
      en: "Converts an effective annual rate into a nominal annual rate with m compounding periods per year.",
    },
    resultSymbol: "j",
    resultIsRate: true,
    inputs: [
      {
        id: "ia",
        type: "rate",
        labels: {
          es: "Tasa anual efectiva i_a (%)",
          en: "Effective annual rate i_a (%)",
        },
        placeholder: {
          es: "Porcentaje anual efectivo",
          en: "Effective annual percentage",
        },
      },
      {
        id: "m",
        type: "periods",
        labels: {
          es: "Periodos de capitalización por año m",
          en: "Compounding periods per year m",
        },
        placeholder: {
          es: "Por ejemplo 12, 4, 2",
          en: "For example 12, 4, 2",
        },
      },
    ],
    compute: ({ ia, m }) => m * (Math.pow(1 + ia, 1 / m) - 1),
  },
  equivalent_nominal_rate: {
    id: "equivalent_nominal_rate",
    symbol: "j_2 = m_2 ((1 + j_1 / m_1)^{m_1 / m_2} − 1)",
    names: {
      es: "Tasa nominal equivalente",
      en: "Equivalent nominal rate",
    },
    category: "rate_conversions",
    description: {
      es: "Convierte una tasa nominal anual con m₁ capitalizaciones en otra nominal equivalente con m₂ capitalizaciones.",
      en: "Converts a nominal annual rate with m₁ compounding periods into an equivalent nominal rate with m₂ periods.",
    },
    resultSymbol: "j_2",
    resultIsRate: true,
    inputs: [
      {
        id: "j1",
        type: "rate",
        labels: {
          es: "Tasa nominal anual inicial j₁ (%)",
          en: "Initial nominal annual rate j₁ (%)",
        },
        placeholder: {
          es: "Porcentaje nominal anual",
          en: "Nominal annual percentage",
        },
      },
      {
        id: "m1",
        type: "periods",
        labels: {
          es: "Capitalizaciones por año m₁",
          en: "Compounding periods per year m₁",
        },
        placeholder: {
          es: "Por ejemplo 12, 4, 2",
          en: "For example 12, 4, 2",
        },
      },
      {
        id: "m2",
        type: "periods",
        labels: {
          es: "Capitalizaciones por año m₂",
          en: "Compounding periods per year m₂",
        },
        placeholder: {
          es: "Por ejemplo 12, 4, 2",
          en: "For example 12, 4, 2",
        },
      },
    ],
    compute: ({ j1, m1, m2 }) =>
      m2 * (Math.pow(1 + j1 / m1, m1 / m2) - 1),
  },
};

let currentLang = "es";
let currentPeriodMode = "monthly"; // "monthly" | "yearly"
let currentTopic = "all"; // ver mapa topics
const MONTHS_PER_YEAR = 12;

function getNumberValue(raw) {
  const value = parseFloat(String(raw).replace(",", "."));
  return Number.isFinite(value) ? value : NaN;
}

function formatCurrency(amount, lang) {
  if (!Number.isFinite(amount)) return "—";
  const locale = lang === "es" ? "es-MX" : "en-US";
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(amount);
}

function formatRate(rate, lang) {
  if (!Number.isFinite(rate)) return "—";
  const locale = lang === "es" ? "es-MX" : "en-US";
  return (
    new Intl.NumberFormat(locale, {
      maximumFractionDigits: 4,
      minimumFractionDigits: 2,
    }).format(rate * 100) + " %"
  );
}

function translateStaticTexts() {
  const dict = uiText[currentLang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });
}

function renderFormulaOptions() {
  const select = document.getElementById("formula-select");
  select.innerHTML = "";
  const allowedCategories = topics[currentTopic];

  Object.values(formulas).forEach((formula) => {
    if (Array.isArray(allowedCategories) && !allowedCategories.includes(formula.category)) {
      return;
    }
    const option = document.createElement("option");
    option.value = formula.id;
    const nameLabel = formula.names[currentLang];
    option.textContent = nameLabel;
    select.appendChild(option);
  });
}

function renderInputs(formulaId) {
  const container = document.getElementById("dynamic-inputs");
  container.innerHTML = "";
  const formula = formulas[formulaId];
  if (!formula) return;

  formula.inputs.forEach((field) => {
    const wrapper = document.createElement("div");
    wrapper.className = "field";

    const label = document.createElement("label");
    label.setAttribute("for", field.id);
    label.textContent = field.labels[currentLang];
    wrapper.appendChild(label);

    const input = document.createElement("input");
    input.type = "number";
    input.id = field.id;
    input.inputMode = "decimal";
    input.placeholder = field.placeholder[currentLang];
    wrapper.appendChild(input);

    const helper = document.createElement("div");
    helper.className = "helper";
    let helperText = "";
    if (field.type === "amount") {
      helperText =
        currentLang === "es" ? "Monto en unidades monetarias." : "Amount in money units.";
    } else if (field.type === "rate") {
      if (currentLang === "es") {
        helperText =
          currentPeriodMode === "yearly"
            ? "Introduce la TASA ANUAL nominal o efectiva en porcentaje, según la fórmula. Ej: 18."
            : "Introduce la tasa por periodo (por ejemplo mensual) en porcentaje. Ej: 1.5.";
      } else {
        helperText =
          currentPeriodMode === "yearly"
            ? "Enter the ANNUAL nominal or effective rate as a percentage, depending on the formula, e.g. 18."
            : "Enter the per‑period rate (e.g. monthly) as a percentage, e.g. 1.5.";
      }
    } else if (field.type === "periods") {
      // Special case: formulas that explicitly use periods per year
      if (
        formula.id === "period_rate_from_annual" ||
        formula.category === "rate_conversions"
      ) {
        helperText =
          currentLang === "es"
            ? "Número de periodos de capitalización por año."
            : "Number of compounding periods per year.";
      } else if (currentPeriodMode === "yearly") {
        helperText =
          currentLang === "es"
            ? "Número de periodos en AÑOS."
            : "Number of periods in YEARS.";
      } else {
        helperText =
          currentLang === "es"
            ? "Número de periodos en MESES."
            : "Number of periods in MONTHS.";
      }
    }
    helper.textContent = helperText;
    wrapper.appendChild(helper);

    container.appendChild(wrapper);
  });

  const formulaText = document.getElementById("result-formula");
  formulaText.textContent = formula.symbol;

  const explanation = document.getElementById("result-explanation");
  explanation.textContent = formula.description[currentLang];
}

function parseInputs(formula) {
  const values = {};
  for (const field of formula.inputs) {
    const el = document.getElementById(field.id);
    if (!el) return { ok: false, data: null, error: "required" };
    const value = getNumberValue(el.value);
    if (!el.value || !Number.isFinite(value)) {
      return { ok: false, data: null, error: el.value ? "invalidNumber" : "required" };
    }
    if (field.type === "rate") {
      values[field.id] = value / 100;
    } else {
      values[field.id] = value;
    }
  }
  return { ok: true, data: values, error: null };
}

function handleSubmit(event) {
  event.preventDefault();
  const select = document.getElementById("formula-select");
  const formula = formulas[select.value];
  const errorEl = document.getElementById("error-message");
  errorEl.textContent = "";

  const parsed = parseInputs(formula);
  if (!parsed.ok) {
    const dict = uiText[currentLang].errors;
    errorEl.textContent = dict[parsed.error] || "";
    document.getElementById("result-value").textContent = "—";
    return;
  }

  const baseValues = parsed.data;
  const values = applyPeriodMode(formula, baseValues);

  if (formula.validate && !formula.validate(values)) {
    errorEl.textContent = uiText[currentLang].errors.negativeEffective;
    document.getElementById("result-value").textContent = "—";
    return;
  }

  const result = formula.compute(values);
  const display =
    formula.resultIsRate === true
      ? formatRate(result, currentLang)
      : formatCurrency(result, currentLang);

  const symbol = formula.resultSymbol || "";
  document.getElementById("result-value").textContent = `${symbol} = ${display}`;
}

function handleClear() {
  document
    .querySelectorAll("#dynamic-inputs input")
    .forEach((input) => (input.value = ""));
  document.getElementById("result-value").textContent = "—";
  document.getElementById("result-explanation").textContent = "";
  document.getElementById("result-formula").textContent = "";
  document.getElementById("error-message").textContent = "";
}

function setupLanguageSwitcher() {
  const buttons = document.querySelectorAll(".lang-button");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      if (lang === currentLang) return;
      currentLang = lang;
      buttons.forEach((b) => {
        const active = b === btn;
        b.classList.toggle("active", active);
        b.setAttribute("aria-pressed", String(active));
      });
      translateStaticTexts();
      renderFormulaOptions();
      const select = document.getElementById("formula-select");
      const currentId = select.value || "future_value_simple";
      select.value = currentId;
      renderInputs(currentId);
    });
  });
}

function setupPeriodSwitcher() {
  const buttons = document.querySelectorAll(".period-button");
  if (!buttons.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const mode = btn.getAttribute("data-period");
      if (!mode || mode === currentPeriodMode) return;

      currentPeriodMode = mode;

      buttons.forEach((b) => {
        const active = b === btn;
        b.classList.toggle("active", active);
        b.setAttribute("aria-pressed", String(active));
      });

      // Re-render current formula inputs so helper texts match the mode
      const select = document.getElementById("formula-select");
      const currentId = select.value || "future_value_simple";
      select.value = currentId;
      renderInputs(currentId);
    });
  });
}

function setupTopicSwitcher() {
  const buttons = document.querySelectorAll(".topic-button");
  if (!buttons.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const topic = btn.getAttribute("data-topic");
      if (!topic || topic === currentTopic) return;

      currentTopic = topic;

      buttons.forEach((b) => {
        const active = b === btn;
        b.classList.toggle("active", active);
        b.setAttribute("aria-pressed", String(active));
      });

      renderFormulaOptions();
      const select = document.getElementById("formula-select");
      const currentId = select.value || "future_value_simple";
      select.value = currentId;
      renderInputs(currentId);
    });
  });
}

function applyPeriodMode(formula, values) {
  // Only adjust when user has chosen yearly mode
  if (currentPeriodMode !== "yearly" || !formula) {
    return values;
  }

  // Do not auto-convert for formulas that already handle this explicitly
  // or for pure compound-interest and rate-conversion formulas,
  // or for CETES/discount formulas that work directly with days.
  if (
    formula.id === "period_rate_from_annual" ||
    formula.id === "simple_rate" ||
    formula.category === "compound_interest" ||
    formula.category === "rate_conversions" ||
    formula.id === "cetes_present_from_discount" ||
    formula.id === "cetes_present_from_yield" ||
    formula.id === "cetes_yield_from_prices"
  ) {
    return values;
  }

  // Find a rate field and a periods field in the formula definition
  let rateFieldId = null;
  let periodsFieldId = null;
  if (Array.isArray(formula.inputs)) {
    formula.inputs.forEach((field) => {
      if (field.type === "rate" && !rateFieldId) rateFieldId = field.id;
      if (field.type === "periods" && !periodsFieldId) periodsFieldId = field.id;
    });
  }

  if (!rateFieldId || !periodsFieldId) {
    return values;
  }

  const rate = values[rateFieldId];
  const n = values[periodsFieldId];

  if (!Number.isFinite(rate) || !Number.isFinite(n)) {
    return values;
  }

  // Interpret entered rate as nominal ANNUAL and n as YEARS,
  // and convert to equivalent monthly simple interest parameters.
  const adjusted = { ...values };
  adjusted[rateFieldId] = rate / MONTHS_PER_YEAR;
  adjusted[periodsFieldId] = n * MONTHS_PER_YEAR;

  return adjusted;
}

function init() {
  translateStaticTexts();
  renderFormulaOptions();

  const select = document.getElementById("formula-select");
  const initialId = select.value || "future_value_simple";
  select.value = initialId;
  renderInputs(initialId);

  select.addEventListener("change", () => renderInputs(select.value));
  document
    .getElementById("calculator-form")
    .addEventListener("submit", handleSubmit);
  document
    .getElementById("clear-button")
    .addEventListener("click", handleClear);

  setupLanguageSwitcher();
  setupPeriodSwitcher();
  setupTopicSwitcher();
}

document.addEventListener("DOMContentLoaded", init);

