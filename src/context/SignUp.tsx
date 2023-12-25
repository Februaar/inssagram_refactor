import { createContext, useContext, useReducer, Dispatch } from "react";

interface SignUpState {
  emailData: string;
  nicknameData: string;
  passwordData: string;
  jobData: string;
}

interface SignUpAction {
  type: string;
  payload: Partial<SignUpState>;
}

interface SignUpProviderProps {
  children: React.ReactNode;
}

interface SignUpContextType {
  state: SignUpState;
  dispatch: Dispatch<SignUpAction>;
}

const SignUpContext = createContext<SignUpContextType | undefined>(undefined);

const initialState = {
  emailData: "",
  nicknameData: "",
  passwordData: "",
  jobData: "",
};

const signUpReducer = (state: SignUpState, action: SignUpAction): SignUpState => {
  switch (action.type) {
    case "SET_SIGNUP_DATA":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const SignUpProvider: React.FC<SignUpProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(signUpReducer, initialState);

  return (
    <SignUpContext.Provider value={{ state, dispatch }}>
      {children}
    </SignUpContext.Provider>
  );
};

// useContext 훅으로 SignUpContext의 값을 받아옴
const useSignUp = () => {
  const context = useContext(SignUpContext);

  // 초기 접근시에는 값이 없으므로 state를 초기 상태로 dispatch는 빈 함수로 반환
  return context || { state: initialState, dispatch: () => {} };
};

export { SignUpProvider, useSignUp };
