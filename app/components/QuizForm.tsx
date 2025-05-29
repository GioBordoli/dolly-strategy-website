"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Define types for Calendly
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

// Define types for our form fields
type SelectFieldOption = {
  value: string;
  label: string;
};

type InputField = {
  name: string;
  label: string;
  type: 'text' | 'email' | 'number';
  placeholder: string;
};

type SelectField = {
  name: string;
  label: string;
  type: 'select';
  options: SelectFieldOption[];
};

type Field = InputField | SelectField;

type Question = {
  title: string;
  fields: Field[];
};

export default function QuizForm() {
  const pathname = usePathname();
  const isItalian = pathname?.startsWith('/it');
  
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    firmType: '',
    employeeCount: '',
    manualHours: '',
    revenue: '',
    avgEmployeeSalary: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [calculatedResults, setCalculatedResults] = useState({
    annualLoss: 0,
    potentialSavings: 0,
    potentialRevenue: 0
  });
  
  const questions: Question[] = isItalian ? [
    {
      title: "Iniziamo con le tue informazioni",
      fields: [
        { name: 'name', label: 'Nome Completo', type: 'text', placeholder: 'Il tuo nome' },
        { name: 'email', label: 'Email di Lavoro', type: 'email', placeholder: 'tu@esempio.com' }
      ]
    },
    {
      title: "Parlaci della tua azienda",
      fields: [
        { 
          name: 'firmType', 
          label: 'Tipo di Azienda', 
          type: 'select', 
          options: [
            { value: '', label: 'Seleziona il tipo di azienda' },
            { value: 'accounting', label: 'Contabilità/Ragioneria' },
            { value: 'law', label: 'Studio Legale' },
            { value: 'consulting', label: 'Consulenza' },
            { value: 'other', label: 'Altri Servizi Professionali' }
          ]
        },
        { 
          name: 'employeeCount', 
          label: 'Numero di Dipendenti', 
          type: 'select', 
          options: [
            { value: '', label: 'Seleziona il numero di dipendenti' },
            { value: '1', label: 'Solo io (autonomo)' },
            { value: '2-5', label: '2-5 dipendenti' },
            { value: '6-10', label: '6-10 dipendenti' },
            { value: '11-20', label: '11-20 dipendenti' },
            { value: '21+', label: '21+ dipendenti' }
          ]
        }
      ]
    },
    {
      title: "Informazioni finanziarie",
      fields: [
        { 
          name: 'revenue', 
          label: 'Fatturato annuale totale (€)', 
          type: 'select', 
          options: [
            { value: '', label: 'Seleziona il fatturato annuale' },
            { value: '0-100000', label: 'Meno di €100.000' },
            { value: '100000-250000', label: '€100.000 - €250.000' },
            { value: '250000-500000', label: '€250.000 - €500.000' },
            { value: '500000-1000000', label: '€500.000 - €1 milione' },
            { value: '1000000+', label: 'Più di €1 milione' }
          ]
        },
        {
          name: 'avgEmployeeSalary',
          label: 'Costo medio annuale per dipendente (€)',
          type: 'select',
          options: [
            { value: '', label: 'Seleziona il costo medio' },
            { value: '20000', label: 'Fino a €20.000' },
            { value: '35000', label: '€20.000 - €35.000' },
            { value: '50000', label: '€35.000 - €50.000' },
            { value: '75000', label: '€50.000 - €75.000' },
            { value: '100000', label: 'Più di €75.000' }
          ]
        }
      ]
    },
    {
      title: "Troviamo le tue perdite di tempo",
      fields: [
        { 
          name: 'manualHours', 
          label: 'Ore settimanali dedicate ad attività ripetitive', 
          type: 'select', 
          options: [
            { value: '', label: 'Seleziona le ore settimanali' },
            { value: '5', label: '0-5 ore' },
            { value: '10', label: '6-10 ore' },
            { value: '20', label: '11-20 ore' },
            { value: '30', label: '21-40 ore' },
            { value: '50', label: 'Più di 40 ore' }
          ]
        }
      ]
    }
  ] : [
    {
      title: "Let's start with your information",
      fields: [
        { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Your name' },
        { name: 'email', label: 'Work Email', type: 'email', placeholder: 'you@example.com' }
      ]
    },
    {
      title: "Tell us about your firm",
      fields: [
        { 
          name: 'firmType', 
          label: 'Type of Firm', 
          type: 'select', 
          options: [
            { value: '', label: 'Select your firm type' },
            { value: 'accounting', label: 'Accounting/Bookkeeping' },
            { value: 'law', label: 'Law Firm' },
            { value: 'consulting', label: 'Consulting' },
            { value: 'other', label: 'Other Professional Services' }
          ]
        },
        { 
          name: 'employeeCount', 
          label: 'Number of Employees', 
          type: 'select', 
          options: [
            { value: '', label: 'Select employee count' },
            { value: '1', label: 'Just me (solo)' },
            { value: '2-5', label: '2-5 employees' },
            { value: '6-10', label: '6-10 employees' },
            { value: '11-20', label: '11-20 employees' },
            { value: '21+', label: '21+ employees' }
          ]
        }
      ]
    },
    {
      title: "Financial Information",
      fields: [
        { 
          name: 'revenue', 
          label: 'Total Annual Revenue ($)', 
          type: 'select', 
          options: [
            { value: '', label: 'Select annual revenue' },
            { value: '0-100000', label: 'Less than $100,000' },
            { value: '100000-250000', label: '$100,000 - $250,000' },
            { value: '250000-500000', label: '$250,000 - $500,000' },
            { value: '500000-1000000', label: '$500,000 - $1 million' },
            { value: '1000000+', label: 'More than $1 million' }
          ]
        },
        {
          name: 'avgEmployeeSalary',
          label: 'Average Annual Cost per Employee ($)',
          type: 'select',
          options: [
            { value: '', label: 'Select average cost' },
            { value: '20000', label: 'Up to $20,000' },
            { value: '35000', label: '$20,000 - $35,000' },
            { value: '50000', label: '$35,000 - $50,000' },
            { value: '75000', label: '$50,000 - $75,000' },
            { value: '100000', label: 'More than $75,000' }
          ]
        }
      ]
    },
    {
      title: "Let's find your time sucks",
      fields: [
        { 
          name: 'manualHours', 
          label: 'Hours spent weekly on repetitive tasks', 
          type: 'select', 
          options: [
            { value: '', label: 'Select hours per week' },
            { value: '5', label: '0-5 hours' },
            { value: '10', label: '6-10 hours' },
            { value: '15', label: '11-20 hours' },
            { value: '30', label: '21-40 hours' },
            { value: '50', label: 'Over 40 hours' }
          ]
        }
      ]
    }
  ];

  const translations = {
    en: {
      validation: "Please fill out all fields to continue",
      question: "Question",
      of: "of",
      back: "Back",
      continue: "Continue",
      getResults: "Get Results",
      resultsReady: "Your Results Are Ready!",
      basedOnInput: "Based on your input, your firm is losing approximately",
      sentReport: "We've sent your detailed report to",
      withRecommendations: "with personalized automation recommendations that could save you",
      andAdd: "and add",
      inNewRevenue: "in new revenue",
      bookCall: "Book a Free Strategy Call",
      seeHow: "See how we can put this cash in your pocket",
      perYear: "/year",
    },
    it: {
      validation: "Per favore, compila tutti i campi per continuare",
      question: "Domanda",
      of: "di",
      back: "Indietro",
      continue: "Continua",
      getResults: "Ottieni Risultati",
      resultsReady: "I Tuoi Risultati Sono Pronti!",
      basedOnInput: "In base ai tuoi dati, la tua azienda sta perdendo circa",
      sentReport: "Abbiamo inviato il tuo report dettagliato a",
      withRecommendations: "con raccomandazioni di automazione personalizzate che potrebbero farti risparmiare",
      andAdd: "e aggiungere",
      inNewRevenue: "di nuovi ricavi",
      bookCall: "Prenota una Chiamata Strategica Gratuita",
      seeHow: "Scopri come possiamo mettere questi soldi nelle tue tasche",
      perYear: "/anno",
    }
  };

  const t = isItalian ? translations.it : translations.en;
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleNext = () => {
    // Very basic validation
    const currentFields = questions[currentStep].fields;
    let isValid = true;
    
    for (const field of currentFields) {
      if (!formData[field.name as keyof typeof formData]) {
        isValid = false;
        break;
      }
    }
    
    if (isValid) {
      if (currentStep < questions.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        handleSubmit();
      }
    } else {
      alert(t.validation);
    }
  };
  
  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const calculateResults = () => {
    // Parse values from form data
    let employeeCount = 1;
    if (formData.employeeCount === '1') {
      employeeCount = 1;
    } else if (formData.employeeCount === '2-5') {
      employeeCount = 3; // average
    } else if (formData.employeeCount === '6-10') {
      employeeCount = 8; // average
    } else if (formData.employeeCount === '11-20') {
      employeeCount = 15; // average
    } else if (formData.employeeCount === '21+') {
      employeeCount = 25; // conservative estimate
    }

    // Parse salary
    const avgSalary = parseInt(formData.avgEmployeeSalary) || 50000;
    
    // Parse hours
    const weeklyHours = parseInt(formData.manualHours) || 10;
    
    // Calculate hourly rate
    const hourlyRate = avgSalary / (52 * 40); // assuming 40-hour work week, 52 weeks
    
    // Calculate annual loss
    // Formula: employees * hours per week * hourly rate * 52 weeks
    const annualLoss = Math.round(employeeCount * weeklyHours * hourlyRate * 52);
    
    // Potential savings (usually 70-80% of the loss can be recovered)
    const potentialSavings = Math.round(annualLoss * 0.75);
    
    // Potential new revenue (typically 40-60% of savings)
    const potentialRevenue = Math.round(potentialSavings * 0.5);
    
    return {
      annualLoss,
      potentialSavings,
      potentialRevenue
    };
  };
  
  const handleSubmit = () => {
    // Calculate results based on collected data
    const results = calculateResults();
    setCalculatedResults(results);
    
    // Here you would normally submit to your API/backend
    console.log("Submitting data:", formData);
    console.log("Calculated results:", results);
    
    // For now, just simulate a submission
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };
  
  const formatCurrency = (amount: number) => {
    const currencySymbol = isItalian ? '€' : '$';
    return `${currencySymbol}${amount.toLocaleString()}`;
  };
  
  // Add Calendly open function
  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/dollystrategy/30min'
      });
    }
  };
  
  if (submitted) {
    return (
      <div className="text-center p-6 bg-green-50 rounded-lg">
        <div className="mb-4 flex justify-center">
          <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2">{t.resultsReady}</h3>
        <p className="mb-4">
          {t.basedOnInput} <span className="text-red-600 font-bold">{formatCurrency(calculatedResults.annualLoss)}{t.perYear}</span> {isItalian ? 'a causa di processi manuali' : 'to manual processes'}.
        </p>
        <p className="mb-6">
          {t.sentReport} <span className="font-medium">{formData.email}</span> {t.withRecommendations} <span className="text-green-600 font-bold">{formatCurrency(calculatedResults.potentialSavings)}{t.perYear}</span> {t.andAdd} <span className="text-blue-600 font-bold">{formatCurrency(calculatedResults.potentialRevenue)}</span> {t.inNewRevenue}.
        </p>
        <button 
          onClick={openCalendly}
          className="w-full py-3 px-6 bg-primary-blue text-white font-bold rounded-lg shadow-md hover:bg-primary-blue/90 transition"
        >
          {t.bookCall}
        </button>
        <p className="mt-2 text-sm">{t.seeHow}</p>
      </div>
    );
  }
  
  const currentQuestion = questions[currentStep];
  
  return (
    <div>
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          {questions.map((_, index) => (
            <div 
              key={index}
              className={`h-2 ${index <= currentStep ? 'bg-primary-green' : 'bg-gray-200'} flex-1 ${index < questions.length - 1 ? 'mr-1' : ''}`}
            />
          ))}
        </div>
        <p className="text-sm text-center text-gray-600">
          {t.question} {currentStep + 1} {t.of} {questions.length}
        </p>
      </div>
      
      <h4 className="font-medium mb-4">{currentQuestion.title}</h4>
      
      <form className="space-y-4">
        {currentQuestion.fields.map((field) => (
          <div key={field.name} className="space-y-1">
            <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">
              {field.label}
            </label>
            
            {field.type === 'select' ? (
              <select
                id={field.name}
                name={field.name}
                value={formData[field.name as keyof typeof formData]}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-primary-green"
              >
                {field.options.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name as keyof typeof formData]}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-primary-green"
              />
            )}
          </div>
        ))}
        
        <div className="flex justify-between mt-8">
          {currentStep > 0 ? (
            <button
              type="button"
              onClick={handleBack}
              className="py-3 px-6 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 transition"
            >
              {t.back}
            </button>
          ) : (
            <div></div>
          )}
          
          <button
            type="button"
            onClick={handleNext}
            className="py-3 px-6 bg-primary-green text-white font-bold rounded-lg hover:bg-primary-green/90 transition"
          >
            {currentStep === questions.length - 1 ? t.getResults : t.continue}
          </button>
        </div>
      </form>
    </div>
  );
} 