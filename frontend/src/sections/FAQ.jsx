import React from 'react'
import { Animated } from '../components/Animated'
import { faqs } from '../data/data'
import { Plus, X } from 'lucide-react'

export const FAQ = () => {
    return (
        <section id='faq' className='px-auto mt-44'>
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-14">
                    <Animated delay={0.2}>

                        <p className='text-orange-500 font-medium uppercase mb-3.5'>FAQ's</p>



                    </Animated>



                    <Animated delay={0.2}>
                        <h2 className='text-4xl md:text-5xl max-w-xl mx-auto text-balance '>Frequently Asked Question</h2>
                    </Animated>
                </div>



                <div className="space-y-3">
                    {faqs.map((faq, index) => (
                        <Animated key={index} y={150} delay={index * 0.15}>



                            <details className='border border-slate-200 text-zinc-500 rounded-lg  group'>
                                <summary className='flex items-center justify-between p-4 cursor-pointer list-none hover:bg-slate-50/50 transition-colors [&::-webkit-details-marker]:hidden'>
                                    <span className='text-zinc-700 pr-4'>{faq.question}</span>
                                    <span className='size-7 rounded-full bg-black/5 grid place-content-center shrink-0 '>
                                        <Plus size={14} className='group-open:hiddden' />
                                        <X size={14} className='hidden  group-open:block ' />
                                    </span>
                                </summary>


                                <p className="px-5 pb-4 leading-relaxed">{faq.answer}</p>




                            </details>




                        </Animated>
                    ))}
                </div>








            </div>




        </section>
    )
}
