/* AUTO-GENERATED FILE. DO NOT MODIFY.
 * This class was automatically generated by the
 * static binding generator from the resources it found.
 * Please do not modify by hand.
 */
package com.tns.gen.java.lang;

public class Object_vendor_157727_36_DataFormValidationListenerImpl extends java.lang.Object
    implements com.tns.NativeScriptHashCodeProvider,
        com.telerik.widget.dataform.engine.EntityPropertyValidationListener {
  public Object_vendor_157727_36_DataFormValidationListenerImpl() {
    super();
    com.tns.Runtime.initInstance(this);
  }

  public void onValidate(com.telerik.widget.dataform.engine.EntityProperty param_0) {
    java.lang.Object[] args = new java.lang.Object[1];
    args[0] = param_0;
    com.tns.Runtime.callJSMethod(this, "onValidate", void.class, args);
  }

  public void onDidValidate(com.telerik.widget.dataform.engine.EntityProperty param_0) {
    java.lang.Object[] args = new java.lang.Object[1];
    args[0] = param_0;
    com.tns.Runtime.callJSMethod(this, "onDidValidate", void.class, args);
  }

  public int hashCode__super() {
    return super.hashCode();
  }

  public boolean equals__super(java.lang.Object other) {
    return super.equals(other);
  }
}
