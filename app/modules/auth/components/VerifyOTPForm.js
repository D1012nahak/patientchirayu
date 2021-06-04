import { Formik } from "formik";
import React from "react";
import { Text } from "react-native";
import * as Yup from "yup";
import { AppButton } from "../../../components/form/AppButton";
import { AppTextInput } from "../../../components/form/AppTextInput";
import { FormGroup } from "../../../components/form/FormGroup";
import { styles } from "../styles/Styles";
const VerifyOTPSchema = Yup.object().shape({
	otp: Yup.string()
		.required("Required")
		.matches(/^[0-9]+$/, "Must be only digits")
		.min(6, "Must be exactly 6 digits")
		.max(6, "Must be exactly 6 digits"),
});

export const VerifyOTPForm = (props) => {
	return (
		<Formik
			initialValues={{ otp: "" }}
			validationSchema={VerifyOTPSchema}
			validateOnChange={false}
			validateOnBlur={false}
			onSubmit={(values) => props.navigation.navigate("AppDrawer")}
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
							placeholder="Enter OTP"
							onChangeText={handleChange("otp")}
							onBlur={handleBlur("otp")}
							value={values.otp}
						/>
						{errors.otp && touched.otp ? (
							<Text style={styles.error}>{errors.otp}</Text>
						) : null}
					</FormGroup>
					<AppButton
						style={styles.button}
						textStyle={styles.buttonText}
						title="Verify OTP"
						onPress={handleSubmit}
					/>
				</>
			)}
		</Formik>
	);
};
