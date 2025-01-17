import Modal from "./ui/modal";
import { useForm } from "react-form-ease";
import { Spinner } from "./ui/spinner";
import Input from "./ui/input";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { submitVolunteeringCreation } from "@/redux/actions/voluntRequestActions";
import { useState } from "react";

interface VolunteeringCreatorProps {
  isOpen: boolean;
  onClose: () => void;
  refugee_id: string | undefined
  setRefreshFlag: Function;
}


const VolunteeringCreator = ({
  isOpen,
  onClose,refugee_id, setRefreshFlag
}: VolunteeringCreatorProps) => {
    const dispatch = useDispatch<AppDispatch>();
    const [isLoading, setIsLoading] = useState(false)
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsLoading(true);
      const response = await dispatch(submitVolunteeringCreation(formData))
      if (response?.status === 200){
        setRefreshFlag(true);
       }
    }
    const {
        formData,
        updateForm,
        // validateForm,
        errors: formErrors = {},
      } = useForm({
        data: {
          refugee_id: refugee_id ? refugee_id : '',
          description: "",
          requirements: "",
          availability: "",
        },
        validations: {
          description: (value) => {
            if (!value) return "Por favor ingresa una descripción";
          },
          requirements: (value) => {
            if (!value) return "Por favor ingresa un requerimiento";
          },
          availability: (value) => {
            if (!value) return "Por favor ingresa una respuesta";
          },
        },
      });

      const closePopup = () => {
        setIsLoading(false)
        onClose();
      };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <button className="bg-primaryLight text-light text-2xl p-2 my-2 font-semibold rounded-full shadow-md hover:bg-primaryDark focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-75 absolute">
        </button>
        <form
          className="max-w-md md:max-w-2xl lg:max-w-3xl p-8 flex flex-col justify-center"
          onSubmit={handleSubmit}
        >
          <div className="email text-">
            <Input
              name="description"
              type="text"
              placeholder="Descripción"
              className=""
              value={formData.description}
              onChange={(e) => updateForm({ description: e.target.value })}
            />
            {formErrors.description && (
              <p className="text-red-500">{formErrors.description}</p>
            )}

          </div>
          <div className="requirements">
            <Input
              name="requirements"
              type="text"
              placeholder="Requerimientos"
              className=""
              value={formData.requirements}
              onChange={(e) => updateForm({ requirements: e.target.value })}
            ></Input>
            {formErrors.requirements && (
              <p className="text-red-500">{formErrors.requirements}</p>
            )}
          </div>
          <div className="availability">
            <Input
              name="availability"
              type="text"
              placeholder="Disponibilidad"
              className=""
              value={formData.availability}
              onChange={(e) =>
                updateForm({ availability: e.target.value })
              }
            ></Input>
            {formErrors.availability && (
              <p className="text-red-500">{formErrors.availability}</p>
            )}
          </div>
          <button
            className="border-1 rounded-3xl h-14 w-[85%] bg-primaryLight text-white mb-[30px] mx-auto mt-4"
            type="submit"
          >
            Registrar
          </button>
        </form>
        {isLoading && <Spinner />} 
        {isLoading && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h2 className="text-2xl font-semibold mb-4">
              ¡Haz creado un voluntariado exitosamente!
              </h2>
              <button
                className="bg-primaryLight text-white px-4 py-2 rounded-md"
                onClick={closePopup}
              >
                Cerrar
              </button>
            </div>
          </div>
        )}
      </Modal>
      ;
    </>
  );
};

export default VolunteeringCreator;

