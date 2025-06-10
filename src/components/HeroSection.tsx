import {Carousel} from "flowbite-react";
// import {Button} from './button.tsx';
// import {CircleArrowRightIcon} from "../assets/circle-arrow-right-icon.tsx"
// import {Label, Modal, Select, TextInput} from "flowbite-react";
// import {useState} from "react";

// function ActionButtons() {
//     const [openModal, setOpenModal] = useState(false);
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [country, setCountry] = useState('');
//
//     function onCloseModal() {
//         setOpenModal(false);
//         setName('');
//         setEmail('');
//         setCountry('');
//     }
//
//     function onApplyModal() {
//         console.log({name}, {email}, {country});
//         onCloseModal();
//     }
//
//     return (
//         <div className="flex gap-4">
//             <Button onClick={() => setOpenModal(true)} size="large">
//                 Apply Now
//             </Button>
//
//             <Modal show={openModal} size="md" onClose={onCloseModal} popup>
//                 <Modal.Header/>
//                 <Modal.Body>
//                     <div className="space-y-6">
//                         <h3 className="text-xl font-medium text-gray-900 dark:text-white">We will text you back</h3>
//                         <div>
//                             <div className="mb-2 block">
//                                 <Label value="Your name" />
//                             </div>
//                             <TextInput
//                                 id="name"
//                                 placeholder="Name"
//                                 value={name}
//                                 onChange={(event) => setName(event.target.value)}
//                                 required
//                             />
//                         </div>
//
//                         <div>
//                             <div className="mb-2 block">
//                                 <Label htmlFor="email" value="Your email" />
//                             </div>
//                             <TextInput
//                                 id="email"
//                                 placeholder="name@company.com"
//                                 value={email}
//                                 onChange={(event) => setEmail(event.target.value)}
//                                 required
//                             />
//                         </div>
//                         <div>
//                             <div className="max-w-md">
//                                 <div className="mb-2 block">
//                                     <Label htmlFor="countries" value="Select your country"/>
//                                 </div>
//                                 <Select
//                                     id="countries"
//                                     value={country}
//                                     onChange={(event) => setCountry(event.target.value)}
//                                     required
//                                 >
//                                     <option>Azerbaijan</option>
//                                     <option>Belarus</option>
//                                     <option>Ukraine</option>
//                                     <option>Uzbekistan</option>
//                                     <option>Kyrgyzstan</option>
//                                 </Select>
//                             </div>
//                         </div>
//                         <div className="w-full">
//                             <Button onClick={onApplyModal}>Apply!</Button>
//                         </div>
//                     </div>
//                 </Modal.Body>
//             </Modal>
//
//             <Button size="large" variant="text"
//                     endAdornment={<CircleArrowRightIcon/>}>
//                 See More
//             </Button>
//         </div>
//     );
// }

export default function Preview() {
    return (
        <section
            className="bg-[#0b354e] flex w-full items-start justify-center bg-cover bg-center bg-no-repeat"
        >
                <div
                    className="z-10 m-auto flex max-w-screen-xl grow flex-col items-center justify-start gap-6 py-20 md:gap-12 px-3 sm:px-8 lg:px-16 xl:px-32"
                >
                    <div className="mt-10 flex flex-1 flex-col items-center gap-6 text-center">
                        <div className="flex max-w-2xl flex-col gap-6">
                            <h3 className="text-4xl font-serif font-semibold text-white md:text-6xl">
                                We're here to help you with yours studies
                            </h3>
                            <p className="text-white text-lg font-normal leading-7">
                                Start your education journey with us!
                            </p>
                        </div>
                    </div>

                    {/*<ActionButtons/>*/}

                    <div className="w-2/3 h-48 sm:h-64 lg:h-80 xl:h-96 mx-auto">
                        <Carousel slideInterval={3000}>
                            <img
                                src="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                className="object-cover w-full h-full"
                                alt="Slide 1"
                            />
                            <img
                                src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                className="object-cover w-full h-full"
                                alt="Slide 2"
                            />
                        </Carousel>
                    </div>
                </div>
        </section>
    );
};