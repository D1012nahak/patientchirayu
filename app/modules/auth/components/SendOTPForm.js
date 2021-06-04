import { Formik } from "formik";
import React from "react";
import { Text } from "react-native";
import * as Yup from "yup";
import { AppButton } from "../../../components/form/AppButton";
import { AppTextInput } from "../../../components/form/AppTextInput";
import { FormGroup } from "../../../components/form/FormGroup";
import { styles } from "../styles/Styles";
const SendOTPSchema = Yup.object().shape({
	mobile_no: Yup.string()
		.required("Required")
		.matches(/^[0-9]+$/, "Must be only digits")
		.min(10, "Must be exactly 10 digits")
		.max(10, "Must be exactly 10 digits"),
});

export const SendOTPForm = (props) => {
	return (
		<Formik
			initialValues={{ mobile_no: "" }}
			validationSchema={SendOTPSchema}
			validateOnChange={false}
			validateOnBlur={false}
			onSubmit={(values) => props.navigation.navigate("VerifyOTP")}
		>
			{({
				handleChange,
				handleBlur,
				handleSubmit,
				values,
				errors,
				touched,
			}) => (
				<>
					<FormGroup>
						<AppTextInput
							style={styles.textInput}
							placeholder="Enter your mobile no"
							onChangeText={handleChange("mobile_no")}
							onBlur={handleBlur("mobile_no")}
							value={values.mobile_no}
						/>
						{errors.mobile_no && touched.mobile_no ? (
							<Text style={styles.error}>{errors.mobile_no}</Text>
						) : null}
					</FormGroup>
					<AppButton
						style={styles.button}
						textStyle={styles.buttonText}
						title="Send OTP"
						onPress={handleSubmit}
					/>
				</>
			)}
		</Formik>
	);
};
