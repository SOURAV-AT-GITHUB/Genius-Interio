/*eslint-disable react/prop-types */
export default function Step3({ formData, setFormData, error, setError }) {
  function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return emailRegex.test(email);
  }
  return (
    <div className="text-center bg-white p-2 min-h-[500px]">
      <div className="flex flex-col gap-5 mt-8 max-w-[450px] m-auto">
        <p className="text-xl font-medium mb-4">
          Your estiamte is almost ready
        </p>
        <div className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            className="p-4 border border-slate-400"
          />
          <div className="flex flex-col gap-1">
            <input
              type="email"
              placeholder="Email ID"
              value={formData.email}
              onChange={(e) => {
                if (error.email && validateEmail(e.target.value))
                  setError((prev) => ({ ...prev, email: null }));
                setFormData((prev) => ({ ...prev, email: e.target.value }));
              }}
              className="p-4 border border-slate-400"
            />
            {error.email && (
              <p className="text-red-500 text-sm">*{error.email}</p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <input
              type="number"
              placeholder="Phone Number"
              value={formData.mobile}
              onChange={(e) => {
                if (e.target.value.length > 10) return;
                if (e.target.value.length === 10 && error.mobile)
                  setError((prev) => ({ ...prev, mobile: null }));
                setFormData((prev) => ({ ...prev, mobile: e.target.value }));
              }}
              className="p-4 border border-slate-400"
            />
            {error.mobile && (
              <p className="text-red-500 text-sm">*{error.mobile}</p>
            )}
          </div>
          <input
            type="text"
            placeholder="Property Name"
            value={formData.property_name}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                property_name: e.target.value,
              }))
            }
            className="p-4 border border-slate-400"
          />
          <p className="w-3/4 text-left">
            By submitting this form, you agree to the{" "}
            <a href="" className="text-primary">
              privacy policy
            </a>{" "}
            &{" "}
            <a href="" className="text-primary">
              terms and conditions
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
