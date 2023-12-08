const jsonData = [
    //logo
    {
        "@context": "https://schema.org",
        "type": "Organization",
        "url": "https://www.greenstem.com.my",
        "logo": "https://www.greenstem.com.my/pic/icon.webp"
    },
    //	Local Business
    {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://www.greenstem.com.my",
        "name": "Greenstem Business Software Sdn Bhd",
        "image": [
            "https://www.greenstem.com.my/img/photo/greenstem (1).webp"
        ],
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Block A, A-3-3A, Ativo Plaza",
            "addressLocality": "Bandar Sri Damansara",
            "addressRegion": "KL",
            "postalCode": "52200",
            "addressCountry": "MY"
        },
        //	Option
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 3.1966091,
            "longitude": 101.6160515
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
            }
        ],
        "telephone": "+603-6263 3933",
        "email": "mailto:admin@greenstem.com.my",
        "faxNumber": "+603-6263 7738",
        "url": "https://www.greenstem.com.my"
    },
    //	FAQ
    {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Why choose us?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `
                        Specifically designed for spare parts to improve <strong>efficiency</strong> and <strong>productivity</strong>.
                    `
                }
            },
            {
                "@type": "Question",
                "name": "Achievement",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `
                        <ul>
                            <li>Engaged in spare parts accounting software business more than <strong>20 years</strong>.</li>
                            <li>Installed to more than <strong>800 spare parts companies</strong>.</li>
                        </ul>
                    `
                }
            }
        ]
    },
//Product 
    {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": [
            {
                "@type": "Product",
                "name": "Spare Parts Management & Accounting System",
                "description": "Our specialized system for spare parts companies optimizes efficiency through real-time inventory management, automated orders, and streamlined accounting",
                "brand": {
                    "@type": "brand",
                    "name": "Greenstem Business Software SDN BHD"
                },

                "image": [
                    "https://www.greenstem.com.my/img/photo/greenstem (1).webp"
                ],
                "offers": {
                    "@type": "Offer",
                    "url": "https://www.greenstem.com.my",
                    "price": "55.00",
                    "priceCurrency": "MYR"

                }
            },
            {
                "@type": "Product",
                "name": "Workshop Management System",
                "description": "Designed for workshops, optimizes efficiency with features like job scheduling, inventory tracking, and automated billing.",
                "brand": {
                    "@type": "brand",
                    "name": "Greenstem Business Software SDN BHD"
                },

                "image": [
                    "https://www.greenstem.com.my/img/photo/greenstem (1).webp"
                ],
                "offers": {
                    "@type": "Offer",
                    "url": "https://www.greenstem.com.my",
                    "price": "55.00",
                    "priceCurrency": "MYR"
                }
            }]
    }
]

const jsonLdScript = document.getElementById('json-ld');

// Set the content of the script element to the JSON-LD data
jsonLdScript.textContent = JSON.stringify(jsonData, null, 2);