'use client'
import { useState } from 'react'
import { services, type Service } from '@/data/services'
import ServiceIcon from '@/components/ui/ServiceIcon'

interface Props {
  onNext: (serviceId: string, subOptionId: string | null) => void
}

export default function Step1Service({ onNext }: Props) {
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [selectedSubOption, setSelectedSubOption] = useState<string | null>(null)

  function handleSelect(service: Service) {
    setSelectedService(service)
    setSelectedSubOption(null)
  }

  const canContinue = selectedService && (!selectedService.subOptions || selectedSubOption)

  return (
    <div>
      <h2 className="font-heading text-3xl text-text mb-6">Select a Service</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        {services.map(service => {
          const isSelected = selectedService?.id === service.id
          return (
            <button
              key={service.id}
              onClick={() => handleSelect(service)}
              className={`text-left p-4 rounded-xl border transition-all duration-150 ${
                isSelected ? 'border-primary bg-primary/10' : 'border-border bg-surface-2 hover:border-primary/40'
              }`}
            >
              <div className="flex items-start gap-3">
                <span className={`flex-shrink-0 ${isSelected ? 'text-primary' : 'text-muted'}`}>
                  <ServiceIcon serviceId={service.id} className="w-6 h-6" />
                </span>
                <div className="flex-1">
                  <p className="font-body text-sm font-semibold text-text">{service.name}</p>
                  <p className="font-body text-xs text-muted mt-0.5">{service.unit} ${service.startingPrice}</p>
                </div>
                {isSelected && <span className="text-primary text-lg">✓</span>}
              </div>

              {isSelected && service.subOptions && (
                <div className="mt-3 pt-3 border-t border-primary/20 grid grid-cols-1 gap-1.5">
                  {service.subOptions.map(opt => (
                    <button
                      key={opt.id}
                      onClick={e => { e.stopPropagation(); setSelectedSubOption(opt.id) }}
                      className={`text-left px-3 py-2 rounded-lg border text-xs font-body transition-colors ${
                        selectedSubOption === opt.id
                          ? 'border-primary bg-primary/10 text-text'
                          : 'border-border text-muted hover:border-primary/30'
                      }`}
                    >
                      <span className="font-medium">{opt.name}</span>
                      <span className="ml-2 text-primary">${opt.price}</span>
                    </button>
                  ))}
                </div>
              )}
            </button>
          )
        })}
      </div>

      <button
        onClick={() => onNext(selectedService!.id, selectedSubOption)}
        disabled={!canContinue}
        className="btn-primary w-full py-4 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Continue to Date & Time
      </button>
    </div>
  )
}
