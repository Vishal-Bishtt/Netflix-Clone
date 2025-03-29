const FAQSection = () => {
    const [expandedIndex, setExpandedIndex] = React.useState(null);

    const handleClick = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "What is Netflix?",
            answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices."
        },
        {
            question: "How much does Netflix cost?",
            answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts."
        },
        {
            question: "What can I watch on Netflix?",
            answer: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
        },
        {
            question: "Where can I watch?",
            answer: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device."
        }
    ];

    return (
        <section className="faq">
            <h2>Frequently Asked Questions</h2>
            {faqData.map((item, index) => (
                <div 
                    key={index}
                    className={`faqbox ${expandedIndex === index ? 'expanded' : ''}`}
                    onClick={() => handleClick(index)}
                >
                    <span>{item.question}</span>
                    <svg 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="white" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M12 4V20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4 12H20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className="answer">{item.answer}</div>
                </div>
            ))}
        </section>
    );
};

window.FAQSection = FAQSection;
