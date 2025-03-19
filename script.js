function showLogin() {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('login').style.display = 'flex';
}

function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    if (username && password) {
        alert('Login successful!');
        document.getElementById('login').style.display = 'none';
        document.getElementById('sections').style.display = 'block';
    } else {
        alert('Please enter both username and password');
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    let index = 0;

    function moveSlide(direction) {
        const cardWidth = document.querySelector(".therapist-card").offsetWidth + 20;
        index += direction;
        if (index < 0) {
            index = 0;
        } else if (index > track.children.length - 3) {
            index = track.children.length - 3;
        }
        track.style.transform = `translateX(${-index * cardWidth}px)`;
    }

    prevBtn.addEventListener("click", function () {
        moveSlide(-1);
    });

    nextBtn.addEventListener("click", function () {
        moveSlide(1);
    });
});
const answers = {
    1: "Autism, or Autism Spectrum Disorder (ASD), is a complex neurodevelopmental condition characterized by challenges in social interaction, communication, and repetitive behaviors. It is called a spectrum disorder because its symptoms and severity vary widely among individuals. Some people with autism may have exceptional abilities in areas like math, music, or memory, while others may require significant support in daily life. The exact causes of autism are not fully understood, but it is believed to result from a combination of genetic and environmental factors. Early diagnosis and intervention can greatly improve the quality of life for individuals with autism, helping them develop essential skills and independence.",
    2: "Dealing with autism requires patience, understanding, and tailored strategies. Establishing a structured routine is crucial, as individuals with autism often find comfort in predictability. Clear and simple communication, including the use of visual aids or sign language, can help overcome communication barriers. Sensory sensitivities should be acknowledged by creating a calming environment, reducing loud noises, and avoiding overwhelming stimuli. Social skills training, therapy, and support from caregivers, teachers, and professionals play a key role in helping autistic individuals navigate daily life more effectively.",
    3: "Autism is not a disease that can be 'cured' in the traditional sense, but various therapies and interventions can help manage symptoms and enhance an individual's abilities. Behavioral therapy, such as Applied Behavior Analysis (ABA), speech therapy, and occupational therapy, can significantly improve communication, social skills, and self-regulation. Early intervention and continuous support allow individuals with autism to lead fulfilling and independent lives while embracing their unique strengths and abilities.",
    4: "Interacting with autistic individuals requires empathy, patience, and an understanding of their needs. Avoid making assumptions about their abilities or preferences. Instead, use direct and clear communication, respect their personal space, and be mindful of sensory sensitivities. Encouraging structured interactions and allowing them to engage in activities at their own pace can create a more comfortable and supportive environment. Providing positive reinforcement and acknowledging their efforts help build confidence and trust in social interactions.",
    5: "Tantrums in autistic individuals often stem from frustration, sensory overload, or difficulty expressing emotions. The key to handling these situations is staying calm and identifying potential triggers. Providing a quiet and safe space, using visual or verbal cues to help them communicate, and offering sensory-friendly coping strategies like weighted blankets or fidget toys can be effective. It's important to acknowledge their emotions and reassure them without forcing immediate compliance. Consistency in routines and structured environments can also reduce the occurrence of meltdowns over time.",
    6: "Therapy for autism depends on individual needs and challenges. Applied Behavior Analysis (ABA) is commonly used to reinforce positive behaviors and improve social skills. Speech therapy focuses on communication development, while Occupational Therapy (OT) helps with sensory and motor skills. Sensory Integration Therapy assists individuals in processing sensory information more effectively. Parent training programs and individualized education plans (IEPs) also play a crucial role in long-term development and adaptation.",
    7: "There are several types of therapy available for individuals with autism, each targeting specific challenges. Applied Behavior Analysis (ABA) helps with behavioral improvements and learning new skills. Speech therapy aids in language and communication development. Occupational therapy addresses sensory processing difficulties and motor coordination. Social skills training enhances interactions and relationship-building. Additionally, music therapy, animal-assisted therapy, and cognitive behavioral therapy (CBT) have been found beneficial in improving emotional regulation and engagement. Choosing the right combination of therapies depends on the individual's unique needs and developmental goals."
};

function showAnswer(questionId, button) {
    const chatBox = document.getElementById("chatBox");
    const answer = answers[questionId];

    if (answer) {
        chatBox.innerHTML = `
            <p><strong>Q:</strong> ${button.innerText}</p>
            <p><strong>A:</strong> ${answer}</p>
        `;
        chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the latest message
    } else {
        console.error("Answer not found for questionId:", questionId);
    }
}
function addComment() {
    let commentText = document.getElementById("commentInput").value;
    let imageInput = document.getElementById("imageUpload");
    let commentsContainer = document.getElementById("comments");

    if (!commentText && !imageInput.files.length) return;

    let commentBox = document.createElement("div");
    commentBox.className = "comment-box";

    let profileImg = document.createElement("img");
    profileImg.className = "profile-img";
    profileImg.src = `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 99)}.jpg`;
    profileImg.alt = "Profile";
    commentBox.appendChild(profileImg);

    let textContent = document.createElement("p");
    textContent.innerHTML = `<strong>You:</strong> ${commentText}`;
    commentBox.appendChild(textContent);

    if (imageInput.files.length) {
        let img = document.createElement("img");
        img.src = URL.createObjectURL(imageInput.files[0]);
        img.style.maxWidth = "100%";
        img.style.marginTop = "10px";
        commentBox.appendChild(img);
    }

    commentsContainer.prepend(commentBox);
    document.getElementById("commentInput").value = "";
    imageInput.value = "";
}