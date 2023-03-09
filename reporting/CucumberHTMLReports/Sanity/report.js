$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/features/login.feature");
formatter.feature({
  "name": "Search",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Validate Search functionality",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is in Search page",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters \"\u003cproduct\u003e\" product",
  "keyword": "When "
});
formatter.step({
  "name": "Click on Search button",
  "keyword": "And "
});
formatter.step({
  "name": "Product \"\u003cproduct\u003e\" should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "product"
      ]
    },
    {
      "cells": [
        "iPhone"
      ]
    },
    {
      "cells": [
        "MacBook Air"
      ]
    },
    {
      "cells": [
        "MacBook Pro"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate Search functionality",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is in Search page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.SearchPage.navigateSearchPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"iPhone\" product",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.SearchPage.enterProduct(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.SearchPage.clickSearch()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Product \"iPhone\" should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.SearchPage.verifyProduct()"
});
formatter.result({
  "error_message": "io.cucumber.core.exception.CucumberException: Step [Product {string} should be displayed] is defined with 0 parameters at \u0027stepDefinitions.SearchPage.verifyProduct()\u0027.\nHowever, the gherkin step has 1 arguments:\n * \"iPhone\"\nStep text: Product \"iPhone\" should be displayed\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.arityMismatch(PickleStepDefinitionMatch.java:135)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:42)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:66)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.junit.vintage.engine.execution.RunnerExecutor.execute(RunnerExecutor.java:42)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.accept(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(Unknown Source)\r\n\tat java.util.Iterator.forEachRemaining(Unknown Source)\r\n\tat java.util.Spliterators$IteratorSpliterator.forEachRemaining(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyInto(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(Unknown Source)\r\n\tat java.util.stream.ForEachOps$ForEachOp.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.evaluate(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.forEach(Unknown Source)\r\n\tat org.junit.vintage.engine.VintageTestEngine.executeAllChildren(VintageTestEngine.java:83)\r\n\tat org.junit.vintage.engine.VintageTestEngine.execute(VintageTestEngine.java:74)\r\n\tat org.junit.platform.launcher.core.DefaultLauncher.execute(DefaultLauncher.java:170)\r\n\tat org.junit.platform.launcher.core.DefaultLauncher.execute(DefaultLauncher.java:154)\r\n\tat org.junit.platform.launcher.core.DefaultLauncher.execute(DefaultLauncher.java:90)\r\n\tat org.eclipse.jdt.internal.junit5.runner.JUnit5TestReference.run(JUnit5TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Validate Search functionality",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is in Search page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.SearchPage.navigateSearchPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"MacBook Air\" product",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.SearchPage.enterProduct(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.SearchPage.clickSearch()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Product \"MacBook Air\" should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.SearchPage.verifyProduct()"
});
formatter.result({
  "error_message": "io.cucumber.core.exception.CucumberException: Step [Product {string} should be displayed] is defined with 0 parameters at \u0027stepDefinitions.SearchPage.verifyProduct()\u0027.\nHowever, the gherkin step has 1 arguments:\n * \"MacBook Air\"\nStep text: Product \"MacBook Air\" should be displayed\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.arityMismatch(PickleStepDefinitionMatch.java:135)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:42)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:66)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.junit.vintage.engine.execution.RunnerExecutor.execute(RunnerExecutor.java:42)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.accept(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(Unknown Source)\r\n\tat java.util.Iterator.forEachRemaining(Unknown Source)\r\n\tat java.util.Spliterators$IteratorSpliterator.forEachRemaining(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyInto(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(Unknown Source)\r\n\tat java.util.stream.ForEachOps$ForEachOp.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.evaluate(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.forEach(Unknown Source)\r\n\tat org.junit.vintage.engine.VintageTestEngine.executeAllChildren(VintageTestEngine.java:83)\r\n\tat org.junit.vintage.engine.VintageTestEngine.execute(VintageTestEngine.java:74)\r\n\tat org.junit.platform.launcher.core.DefaultLauncher.execute(DefaultLauncher.java:170)\r\n\tat org.junit.platform.launcher.core.DefaultLauncher.execute(DefaultLauncher.java:154)\r\n\tat org.junit.platform.launcher.core.DefaultLauncher.execute(DefaultLauncher.java:90)\r\n\tat org.eclipse.jdt.internal.junit5.runner.JUnit5TestReference.run(JUnit5TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Validate Search functionality",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is in Search page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.SearchPage.navigateSearchPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"MacBook Pro\" product",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.SearchPage.enterProduct(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.SearchPage.clickSearch()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Product \"MacBook Pro\" should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.SearchPage.verifyProduct()"
});
formatter.result({
  "error_message": "io.cucumber.core.exception.CucumberException: Step [Product {string} should be displayed] is defined with 0 parameters at \u0027stepDefinitions.SearchPage.verifyProduct()\u0027.\nHowever, the gherkin step has 1 arguments:\n * \"MacBook Pro\"\nStep text: Product \"MacBook Pro\" should be displayed\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.arityMismatch(PickleStepDefinitionMatch.java:135)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:42)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:66)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.junit.vintage.engine.execution.RunnerExecutor.execute(RunnerExecutor.java:42)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.accept(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(Unknown Source)\r\n\tat java.util.Iterator.forEachRemaining(Unknown Source)\r\n\tat java.util.Spliterators$IteratorSpliterator.forEachRemaining(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyInto(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(Unknown Source)\r\n\tat java.util.stream.ForEachOps$ForEachOp.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.evaluate(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.forEach(Unknown Source)\r\n\tat org.junit.vintage.engine.VintageTestEngine.executeAllChildren(VintageTestEngine.java:83)\r\n\tat org.junit.vintage.engine.VintageTestEngine.execute(VintageTestEngine.java:74)\r\n\tat org.junit.platform.launcher.core.DefaultLauncher.execute(DefaultLauncher.java:170)\r\n\tat org.junit.platform.launcher.core.DefaultLauncher.execute(DefaultLauncher.java:154)\r\n\tat org.junit.platform.launcher.core.DefaultLauncher.execute(DefaultLauncher.java:90)\r\n\tat org.eclipse.jdt.internal.junit5.runner.JUnit5TestReference.run(JUnit5TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
});