import {  useEffect, useState } from "react";
import { Alert, CircularProgress, Modal } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import { useSelector, useDispatch } from "react-redux";
import {
  updateAdminPanelCategory,
  getAdminPanelDataAction,
  updateTitleDescription,
  deleteImage,
  addNewImage,
} from "../../store/actions";
import { useNavigate } from "react-router-dom";

const slideNavItems = [
  "Modular Kitchen",
  "Master Bedroom",
  "Living Room",
  "Bathroom",
  "Wardrobe",
  "TV Unit Designs",
  "Pooja Room",
  "False Ceiling Designs",
  "Dining Room",
  "Home Office",
  "Tile Designs",
  "Wallpaper Designs",
  "Wall Decor Ideas",
  "Flooring Designs",
  "Door Designs",
  "Home Bar unit",
];
export default function Admin() {
  const adminPanelData = useSelector((store) => store.adminPanel);
  const {  token, } = useSelector(
    (store) => store.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [headingEditorModal, setHeadingEditorModal] = useState({
    isOpen: false,
    title: "",
    description: "",
    category: "",
  });
  const [imageDeleteModal, setImageDeleteModal] = useState({
    isOpen: false,
    id: "",
    title: "",
    size: "",
    category: "",
  });
  const [snackbarState, setSnackbarState] = useState({
    isOpen: false,
    severity: "error",
    message: "Error",
  });
  const [addNewImageModal, setAddNewImageModal] = useState({
    isOpen: false,
    image: null,
    title: "",
    size: "",
    category: "",
  });
  const resetHeadingEditorModal = () => {
    setHeadingEditorModal((prev) => ({
      ...prev,
      isOpen: false,
      title: "",
      description: "",
    }));
  };
  const resetImageDeleteModal = () => {
    setImageDeleteModal((prev) => ({
      ...prev,
      isOpen: false,
      id: "",
      title: "",
      size: "",
    }));
  };
  const resetAddNewImageModal = () => {
    setAddNewImageModal((prev) => ({
      ...prev,
    isOpen: false,
    image: null,
    title: "",
    size: "",
    }));
  };
  const openSnackbar = (message, severity) => {
    setSnackbarState({ isOpen: true, severity, message });
  };
  const closeSnackbar = () => {
    setSnackbarState((prev) => ({ ...prev, isOpen: false }));
  };
  const handleLoad = (event) => {
    event.preventDefault();
    dispatch(
      getAdminPanelDataAction({
        category: adminPanelData.category,
        openSnackbar,
      },token)
    );
  };
  const handleHeadingFormSubmit = (event) => {
    event.preventDefault();

    let newData = {};
    if (adminPanelData.title !== headingEditorModal.title)
      newData.title = headingEditorModal.title;
    if (adminPanelData.description !== headingEditorModal.description)
      newData.description = headingEditorModal.description;
    dispatch(
      updateTitleDescription({
        newData,
        category: adminPanelData.category,
        openSnackbar,
        resetHeadingEditorModal,
      },token)
    );
  };
  const handleDeleteImage = () => {
    dispatch(
      deleteImage({
        category: imageDeleteModal.category,
        id: imageDeleteModal.id,
        openSnackbar,
        resetImageDeleteModal,
      },token)
    );
  };
  const handleAddNewImage = (event) => {
    event.preventDefault();
    const { title, size, image, category } = addNewImageModal;
    const validTypes = [
      "image/jpg",
      "image/jpeg",
      "image/png",
      "image/avif",
      "image/webp",
      "image/jfif",
    ];
    if (!validTypes.includes(image.type)) return alert("Invalid image format");
    dispatch(
      addNewImage({
        title,
        size,
        image,
        category,
        openSnackbar,
        resetAddNewImageModal,
      },token)
    );
  };
  useEffect(() => {
    if(!token) navigate("/signin")
  }, [token,navigate]);
  return (
    <main className="p-10">
      <h2 className="text-5xl text-center p-4">Admin Panel</h2>
      <section className="p-8">
        <form onSubmit={handleLoad} className="flex justify-center gap-4">
          <select
            className="border p-3"
            required
            value={adminPanelData.category}
            onChange={(e) => {
              dispatch(updateAdminPanelCategory(e.target.value));
              setImageDeleteModal((prev) => ({
                ...prev,
                category: e.target.value,
              }));
              setAddNewImageModal((prev) => ({
                ...prev,
                category: e.target.value,
              }));
            }}
          >
            <option value="">Select category</option>
            {slideNavItems.map((item) => (
              <option
                value={item.toLowerCase().split(" ").join("-")}
                key={item}
              >
                {item}
              </option>
            ))}
          </select>
          <button
            type="submit"
            disabled={adminPanelData.isLoading}
            className="bg-primary text-white flex flex-col justify-center  text-lg px-3 disabled:opacity-60 disabled:cursor-progress"
          >
            {adminPanelData.isLoading ? (
              <CircularProgress color="white" size={"2rem"} />
            ) : (
              <p>Load details</p>
            )}
          </button>
        </form>
        <Snackbar
          open={snackbarState.isOpen}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          onClose={closeSnackbar}
          autoHideDuration={5000}
        >
          <Alert severity={snackbarState.severity}>
            {snackbarState.message}
          </Alert>
        </Snackbar>
      </section>

      {adminPanelData.title && (
        <section>
          <div className=" text-center">
            <p className="font-semibold text-lg">Heading</p>
            <h3 className="text-4xl ">{adminPanelData.title}</h3>
            <p className="font-semibold text-lg mt-4">Description</p>
            <h4 className="md:w-3/4 m-auto">{adminPanelData.description}</h4>
            <button
              onClick={() =>
                setHeadingEditorModal((prev) => ({ ...prev, isOpen: true }))
              }
              className="p-3 text-lg  bg-primary text-white mt-4"
            >
              Update Title / Description
            </button>
            <Modal
              open={headingEditorModal.isOpen}
              onClose={resetHeadingEditorModal}
            >
              <div className="bg-white min-w-[60vw] min-h-[50vh]  absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 rounded-xl">
              <div className="text-right p-2">
                  <button
                    onClick={resetHeadingEditorModal}
                  >
                    <CloseIcon fontSize="large" />
                  </button>
                </div>
                <form
                  onSubmit={handleHeadingFormSubmit}
                  className="p-5 text-lg  flex flex-col items-center gap-2"
                >
                  <p className="">Current Heading</p>
                  <p className="text-2xl font-semibold">
                    {adminPanelData.title}
                  </p>
                  <div className="flex gap-4 items-center">
                    <input
                      type="text"
                      placeholder="Enter new heading"
                      className="text-black border  border-black p-2 min-w-[50%] text-center rounded-xl  placeholder:text-black disabled:opacity-50 disabled:cursor-not-allowed"
                      required
                      disabled={
                        adminPanelData.title === headingEditorModal.title
                      }
                      value={headingEditorModal.title}
                      onChange={(e) =>
                        setHeadingEditorModal((prev) => ({
                          ...prev,
                          title: e.target.value,
                        }))
                      }
                    />
                    <input
                      onChange={(e) =>
                        setHeadingEditorModal((prev) => ({
                          ...prev,
                          title: e.target.checked ? adminPanelData.title : "",
                        }))
                      }
                      checked={
                        headingEditorModal.title === adminPanelData.title
                      }
                      type="checkbox"
                      name="heading"
                      className="h-10 w-6"
                    />
                    <label htmlFor="heading">Keep same</label>
                  </div>
                  <p className="text-lg">Current Description</p>
                  <p className="text-center">{adminPanelData.description}</p>
                  <div className="flex gap-4 items-center">
                    <input
                      type="text"
                      placeholder="Enter new description"
                      required
                      className="text-black border  border-black p-2 min-w-[50%] text-center rounded-xl  placeholder:text-black disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={
                        adminPanelData.description ===
                        headingEditorModal.description
                      }
                      value={headingEditorModal.description}
                      onChange={(e) =>
                        setHeadingEditorModal((prev) => ({
                          ...prev,
                          description: e.target.value,
                        }))
                      }
                    />
                    <input
                      onChange={(e) =>
                        setHeadingEditorModal((prev) => ({
                          ...prev,
                          description: e.target.checked
                            ? adminPanelData.description
                            : "",
                        }))
                      }
                      type="checkbox"
                      name="description"
                      className="h-10 w-6"
                    />
                    <label htmlFor="description">Keep same</label>
                  </div>

                  <button
                    type="submit"
                    disabled={
                      adminPanelData.title === headingEditorModal.title &&
                      adminPanelData.description ===
                        headingEditorModal.description
                    }
                    className="bg-primary text-white text-2xl  py-2  px-6 mt-4 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {adminPanelData.isLoading ? (
                      <CircularProgress color="white" size={"2rem"} />
                    ) : (
                      <p>Update</p>
                    )}
                  </button>
                </form>
              </div>
            </Modal>
          </div>
          <div className="mt-5  grid md:grid-cols-2  lg:grid-cols-3 gap-4  md:gap-6 lg:gap-8">
            {adminPanelData.images.map((item, index) => (
              <div key={index} className=" shadow-2xl border">
                <img src={item.image} alt={item.title} />
                <div className="p-2 flex flex-col gap-2">
                  <p>{item.title}</p>
                  <p>Size: {item.size}</p>
                  <button
                    onClick={() =>
                      setImageDeleteModal((prev) => ({
                        ...prev,
                        isOpen: true,
                        ...item,
                      }))
                    }
                    className="bg-red-500 text-white text-xl py-1  px-3"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
            <div className="flex items-center justify-center  bg-blue-200 h-full min-h-[250px]  border-2 border-dotted border-blue-500">
              <div
                onClick={() =>
                  setAddNewImageModal((prev) => ({ ...prev, isOpen: true }))
                }
                className="w-fit p-1  border-4 border-dotted border-black cursor-pointer"
              >
                <AddIcon fontSize="large" className="text-blue-600" />
              </div>
            </div>
            {/*Add Image Modal */}
            <Modal
              open={addNewImageModal.isOpen}
              onClose={resetAddNewImageModal}
            >
              <div className="bg-white min-w-[40vw]  p-4 shadow-2xl absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 rounded-xl">
                <div className="text-right">
                  <button
                    onClick={resetAddNewImageModal}
                  >
                    <CloseIcon fontSize="medium" />
                  </button>
                </div>
                <form
                  onSubmit={handleAddNewImage}
                  className="flex flex-col gap-4 text-lg"
                >
                  <p>
                    Select Image{" "}
                    <span className="text-red-400">
                      *(only .jpg, .jped, .avif, .png, .webp .jfif files are
                      accepted)
                    </span>
                  </p>
                  {addNewImageModal.image && (
                    <img
                      src={URL.createObjectURL(addNewImageModal.image)}
                      alt="new Image"
                      className="max-h-[300px] max-w-[300px] "
                    />
                  )}
                  <input
                    type="file"
                    accept=".jpg, .jped, .avif, .png, .webp, .jfif"
                    onChange={(e) =>
                      setAddNewImageModal((prev) => ({
                        ...prev,
                        image: e.target.files[0],
                      }))
                    }
                    required
                  />
                  <input
                    type="text"
                    placeholder="Add Title"
                    value={addNewImageModal.title}
                    onChange={(e) =>
                      setAddNewImageModal((prev) => ({
                        ...prev,
                        title: e.target.value,
                      }))
                    }
                    className="border-2 p-1 pl-2  placeholder:text-slate-600"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Add Size"
                    value={addNewImageModal.size}
                    onChange={(e) =>
                      setAddNewImageModal((prev) => ({
                        ...prev,
                        size: e.target.value,
                      }))
                    }
                    className="border-2 p-1 pl-2  placeholder:text-slate-600"
                  />
                  <button
                    type="submit"
                    disabled={adminPanelData.isLoading}
                    className="w-fit min-w-[50%] m-auto  bg-blue-500 text-white text-lg font-semibold py-2 disabled:opacity-60 disabled:cursor-progress"
                  >
                    {adminPanelData.isLoading ? (
                      <CircularProgress color="white" size={"2rem"} />
                    ) : (
                      <p>Add</p>
                    )}
                  </button>
                </form>
              </div>
            </Modal>
            {/*Delete Image Modal */}
            <Modal
              open={imageDeleteModal.isOpen}
              onClose={resetImageDeleteModal}
            >
              <div className="bg-white p-4 shadow-2xl absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 rounded-xl">
                <div className="  ">
                  <div className="text-right">
                    <button
                      onClick={resetImageDeleteModal}
                    >
                      <CloseIcon fontSize="medium" />
                    </button>
                  </div>
                  <img
                    src={imageDeleteModal.image}
                    alt={imageDeleteModal.title}
                    className="m-auto  w-4/6"
                  />
                  <div className="p-4 flex flex-col gap-2">
                    <p>{imageDeleteModal.title}</p>
                    <p>Size: {imageDeleteModal.size}</p>
                    <p className="text-red-500 text-sm opacity-80">*This action can not be undo.</p>
                    <button
                      disabled={adminPanelData.isLoading}
                      className="bg-red-500 text-white text-xl py-1  px-3 disabled:opacity-60 disabled:cursor-progress"
                      onClick={handleDeleteImage}
                    >
                      {adminPanelData.isLoading ? (
                        <CircularProgress color="white" size={"2rem"} />
                      ) : (
                        <p>Delete</p>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </Modal>
          </div>
        </section>
      )}
    </main>
  );
}
